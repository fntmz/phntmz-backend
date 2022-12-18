import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import PostRoutes from "./src/routes/PostRoutes.js";
import CreditRoutes from "./src/routes/CreditRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: "100mb" }));

app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

const port = process.env.PORT || 8080;

const url_mongo =
    "mongodb+srv://phntmz:9i0oUPEGOzu1fs7D@cluster0.gcy6zuj.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(url_mongo, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("database connected");
    })
    .catch((error) => {
        console.log("database not found");
    });

mongoose.set("strictQuery", true);

// API
app.use("/api/post", PostRoutes);
app.use("/api/credit", CreditRoutes);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(`${__dirname}/public`));

app.listen(port, () => {
    console.log(`App is operating on port ${port}`);
});
