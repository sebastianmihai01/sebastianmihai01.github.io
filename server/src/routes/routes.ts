import { Router } from 'express';
import { Post } from '../models/post';

type RequestBody = { text: string };
type RequestParams = { postId: string };
let posts: Post[] = [];
const router = Router();

router.get('/', (req, res, next) => {
  res.status(200).json({ "get request" : "done" });
});

router.post('/post', (req, res, next) => {
  const body = req.body as RequestBody;
  const newPost: Post = {
    id: new Date().toISOString(),
    text: body.text,
  };
  posts.push(newPost);
  res.status(201).json({ message: 'Added a new ost', post: newPost, posts: posts});
});

router.put('/post/:postId', (req, res, next) => {
  const params = req.params as RequestParams;
  const tid = params.postId;
  const body = req.body as RequestBody;
  const postIndex = posts.findIndex((postItem) => postItem.id === tid);
  if (postIndex >= 0) {
    posts[postIndex] = { id: posts[postIndex].id, text: body.text };
    return res.status(200).json({ message: 'Updated post', posts: posts });
  }
  res.status(404).json({ message: 'Could not find post for this id.' });
});

router.delete('/post/:postId', (req, res, next) => {
  const params = req.params as RequestParams;
  posts = posts.filter((postItem) => postItem.id !== params.postId);
  res.status(200).json({ message: 'Deleted post', posts: posts });
});

export default router;
