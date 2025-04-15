const express = require('express');
const { check, validationResult } = require('express-validator');
const pool = require('../db');
const auth = require('../middleware/auth');

const router = express.Router();

// Tạo bài viết mới
router.post('/', [
    auth(['user', 'editor', 'admin']),
    check('title', 'Title is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, content } = req.body;
    const userId = req.user.id;

    try {
        const newPost = await pool.query(
            'INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *',
            [title, content, userId]
        );
        res.status(201).json(newPost.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Lấy danh sách bài viết
router.get('/', async (req, res) => {
    try {
        const posts = await pool.query('SELECT * FROM posts');
        res.json(posts.rows);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Cập nhật bài viết
router.put('/:id', auth(['user', 'editor', 'admin']), async (req, res) => {
    const postId = req.params.id;
    const { title, content, status } = req.body;
    const userId = req.user.id;

    try {
        const post = await pool.query('SELECT * FROM posts WHERE id = $1', [postId]);
        if (post.rows.length === 0) {
            return res.status(404).json({ message: 'Post not found' });
        }

        if (post.rows[0].user_id !== userId && req.user.role !== 'admin' && req.user.role !== 'editor') {
            return res.status(403).json({ message: 'Access denied' });
        }

        const updatedPost = await pool.query(
            'UPDATE posts SET title = $1, content = $2, status = $3 WHERE id = $4 RETURNING *',
            [title, content, status || post.rows[0].status, postId]
        );
        res.json(updatedPost.rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Xóa bài viết
router.delete('/:id', auth(['user', 'editor', 'admin']), async (req, res) => {
    const postId = req.params.id;
    const userId = req.user.id;

    try {
        const post = await pool.query('SELECT * FROM posts WHERE id = $1', [postId]);
        if (post.rows.length === 0) {
            return res.status(404).json({ message: 'Post not found' });
        }

        if (post.rows[0].user_id !== userId && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        await pool.query('DELETE FROM posts WHERE id = $1', [postId]);
        res.json({ message: 'Post deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
