const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const pool = require('../db');
const auth = require('../middleware/auth');

const router = express.Router();

// Đăng ký
router.post('/register', [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
    check('name', 'Name is required').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, name } = req.body;

    try {
        const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await pool.query(
            'INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING *',
            [email, hashedPassword, name]
        );

        res.status(201).json(newUser.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Đăng nhập
router.post('/login', [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (user.rows.length === 0) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.rows[0].password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user.rows[0].id, role: user.rows[0].role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Cập nhật thông tin cá nhân
router.put('/profile', auth(['user', 'editor', 'admin']), async (req, res) => {
    const { name } = req.body;
    const userId = req.user.id;

    try {
        const updatedUser = await pool.query(
            'UPDATE users SET name = $1 WHERE id = $2 RETURNING *',
            [name, userId]
        );
        res.json(updatedUser.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
