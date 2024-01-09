import express from "express";
import { createPostsMedia } from "../controllers/postsMediaControllers.js";

const router = express.Router();

router.route("/").post(createPostsMedia);

export default router;
