const express = require('express');
const { check, validationResult } = require('express-validator');
const { posts, getNextPostId } = require('../data');
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
        const newPost = {
            id: getNextPostId(),
            title,
            content,
            status: 'draft',
            user_id: userId,
            created_at: new Date().toISOString()
        };

        posts.push(newPost);
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Lấy danh sách bài viết
router.get('/', async (req, res) => {
    try {
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Cập nhật bài viết
router.put('/:id', auth(['user', 'editor', 'admin']), async (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content, status } = req.body;
    const userId = req.user.id;

    try {
        const post = posts.find(post => post.id === postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        if (post.user_id !== userId && req.user.role !== 'admin' && req.user.role !== 'editor') {
            return res.status(403).json({ message: 'Access denied' });
        }

        post.title = title || post.title;
        post.content = content || post.content;
        post.status = status || post.status;

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Xóa bài viết
router.delete('/:id', auth(['user', 'editor', 'admin']), async (req, res) => {
    const postId = parseInt(req.params.id);
    const userId = req.user.id;

    try {
        const postIndex = posts.findIndex(post => post.id === postId);
        if (postIndex === -1) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const post = posts[postIndex];
        if (post.user_id !== userId && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        posts.splice(postIndex, 1);
        res.json({ message: 'Post deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
