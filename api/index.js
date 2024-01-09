import express from "express";
import cors from "cors";
import path from "path";

import postsRoutes from "../src/routes/postsRoutes.js";
import postsMediaRoutes from "../src/routes/postsMediaRoutes.js";

import { con } from "../environment.js";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    //   con.query("SELECT * FROM `persons`", function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
});

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/posts", postsRoutes);
app.use("/api/postsMedia", postsMediaRoutes);

app.use(
    "/public/postsMedia",
    express.static(path.join(__dirname, "../public/postsMedia")),
);

const port = process.env.PORT || 8306;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
