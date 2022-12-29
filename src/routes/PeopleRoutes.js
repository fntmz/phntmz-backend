import express from "express";
import {
    CreatePeople,
    DeletePeople,
    GetPeople,
    GetAllPeople,
    UpdatePeople,
} from "../controllers/PeopleController.js";

const router = express.Router();

router
    .route("/")
    .post(CreatePeople)
    .get(GetAllPeople)
    .patch(UpdatePeople)
    .delete(DeletePeople);

router.route("/:id").get(GetPeople);

export default router;
