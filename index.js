import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import PostRoutes from "./src/routes/PostRoutes.js";
import PeopleRoutes from "./src/routes/PeopleRoutes.js";

const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: "100mb" }));

app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

const port = process.env.PORT || 3000;

const url_mongo =
    "mongodb+srv://phntmz:9i0oUPEGOzu1fs7D@cluster0.gcy6zuj.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(url_mongo, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("database connected");
    })
    .catch((error) => {
        console.log("database not found", error);
    });

// API
app.use("/api/post", PostRoutes);
app.use("/api/people", PeopleRoutes);

app.listen(port, () => {
    console.log(`App is operating on port ${port}`);
});
