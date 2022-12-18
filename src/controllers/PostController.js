import PostModel from "../models/PostModel.js";
import {
    CreateRecord,
    DeleteRecord,
    GetAllRecords,
    ReadRecord,
    UpdateRecord,
} from "../crudFunction.js";

export const CreatePost = CreateRecord(PostModel);
export const GetPost = DeleteRecord(PostModel);
export const GetAllPosts = GetAllRecords(PostModel);
export const UpdatePost = ReadRecord(PostModel);
export const DeletePost = UpdateRecord(PostModel);
