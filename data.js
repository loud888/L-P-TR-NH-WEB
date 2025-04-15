// Dữ liệu in-memory
let users = [];
let posts = [];

// Tạo ID tự tăng
let userIdCounter = 1;
let postIdCounter = 1;

module.exports = {
    users,
    posts,
    getNextUserId: () => userIdCounter++,
    getNextPostId: () => postIdCounter++,
};
