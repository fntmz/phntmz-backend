import express from "express";
import {
    CreatePost,
    DeletePost,
    GetPost,
    GetAllPosts,
    UpdatePost,
} from "../controllers/PostController.js";

const router = express.Router();

router
    .route("/")
    .post(CreatePost)
    .get(GetAllPosts)
    .patch(UpdatePost)
    .delete(DeletePost);

router.route("/:id").get(GetPost);

export default router;
