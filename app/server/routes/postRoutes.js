import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js'

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
})

router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
  }
})
router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photourl = await cloudinary.uploader.upload(photo);
    const newPost = await Post.create({
      name,
      prompt,
      photo: photourl.url
    })
    res.status(201).json({ success: true, data: newPost })
  } catch (error) {
    res.status(500).json({ success: false, massage: error })
  }
})

export default router;
