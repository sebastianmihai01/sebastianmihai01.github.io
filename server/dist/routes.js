"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
//import { post } from '../models/post';
//type RequestBody = { text: string };
//type RequestParams = { postId: string };
//let posts: post[] = [];
var router = (0, express_1.Router)();
router.get('/', function (req, res, next) {
    res.status(200).json({ "text": "done" });
});
// router.post('/post', (req, res, next) => {
//   const body = req.body as RequestBody;
//   const newpost: post = {
//     id: new Date().toISOString(),
//     text: body.text,
//   };
//   posts.push(newpost);
//   res.status(201).json({ message: 'Added post', post: newpost, posts: posts });
// });
// router.put('/post/:postId', (req, res, next) => {
//   const params = req.params as RequestParams;
//   const tid = params.postId;
//   const body = req.body as RequestBody;
//   const postIndex = posts.findIndex((postItem) => postItem.id === tid);
//   if (postIndex >= 0) {
//     posts[postIndex] = { id: posts[postIndex].id, text: body.text };
//     return res.status(200).json({ message: 'Updated post', posts: posts });
//   }
//   res.status(404).json({ message: 'Could not find post for this id.' });
// });
// router.delete('/post/:postId', (req, res, next) => {
//   const params = req.params as RequestParams;
//   posts = posts.filter((postItem) => postItem.id !== params.postId);
//   res.status(200).json({ message: 'Deleted post', posts: posts });
// });
exports.default = router;
