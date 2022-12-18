import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const PostSchema = new mongoose.Schema({
    name: String,
    captured: String,
    author: {
        type: String,
    },
    img: {
        data: Buffer,
        contentType: String,
    },
});

const myDB = mongoose.connection.useDb("phntmz-rework");

const PostModel = myDB.model("Post", PostSchema, "post");

export default PostModel;
