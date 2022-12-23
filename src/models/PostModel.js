import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const PostSchema = new mongoose.Schema(
    {
        img: {
            data: Buffer,
            contentType: String,
        },
        name: {
            type: String,
            default: "unnamed file",
        },
        captured_by: {
            type: String,
            default: "anonymous",
        },
        device_captured: {
            type: String,
            default: "unknown device",
        },
        faces: {
            type: [{ type: String, default: "landscape // anonymous" }],
        },
        location: {
            type: String,
            default: "unknown location",
        },
        // likes: future
    },
    {
        timestamps: true,
    },
);

const myDB = mongoose.connection.useDb("phntmz-rework");

const PostModel = myDB.model("Post", PostSchema, "post");

export default PostModel;
