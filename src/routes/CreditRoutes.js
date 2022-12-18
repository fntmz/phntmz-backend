import express from "express";
import {
    CreateCredit,
    DeleteCredit,
    GetCredit,
    GetAllCredits,
    UpdateCredit,
} from "../controllers/CreditController.js";

const router = express.Router();

router
    .route("/")
    .post(CreateCredit)
    .get(GetAllCredits)
    .patch(UpdateCredit)
    .delete(DeleteCredit);

router.route("/:id").get(GetCredit);

export default router;
