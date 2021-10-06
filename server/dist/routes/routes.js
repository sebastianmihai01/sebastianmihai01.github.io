"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let posts = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ "get request": "done" });
});
router.post('/post', (req, res, next) => {
    const body = req.body;
    const newPost = {
        id: new Date().toISOString(),
        text: body.text,
    };
    posts.push(newPost);
    res.status(201).json({ message: 'Added a new ost', post: newPost, posts: posts });
});
router.put('/post/:postId', (req, res, next) => {
    const params = req.params;
    const tid = params.postId;
    const body = req.body;
    const postIndex = posts.findIndex((postItem) => postItem.id === tid);
    if (postIndex >= 0) {
        posts[postIndex] = { id: posts[postIndex].id, text: body.text };
        return res.status(200).json({ message: 'Updated post', posts: posts });
    }
    res.status(404).json({ message: 'Could not find post for this id.' });
});
router.delete('/post/:postId', (req, res, next) => {
    const params = req.params;
    posts = posts.filter((postItem) => postItem.id !== params.postId);
    res.status(200).json({ message: 'Deleted post', posts: posts });
});
exports.default = router;
