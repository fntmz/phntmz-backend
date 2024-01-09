import express from "express";
import {
    createPosts,
    searchPosts,
    getAllPosts,
    updatePosts,
    deletePosts,
} from "../controllers/postsControllers.js";

const router = express.Router();

router
    .route("/")
    .post(createPosts)
    .get(getAllPosts)
    .put(updatePosts)
    .delete(deletePosts);

router.route("/_search").post(searchPosts);

export default router;
