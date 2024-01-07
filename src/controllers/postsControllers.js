import { con } from "../../environment.js";

export const createPosts = async (req, res, next) => {
    try {
        console.log(req.body);
        const query = `INSERT INTO post ( media_url, author, caption ) VALUES ("${req.body?.media_url}","${req.body?.author}","${req.body?.caption}");`;

        con.query(query, function (err, result) {
            if (err)
                throw res.status(400).json({
                    message: "400 bad request",
                    data: err.message,
                });
            res.status(200).json({
                message: "200 success insert",
                id_doc: result.insertId,
            });
        });
    } catch (error) {
        res.status(400).json({
            message: "400 bad request",
            data: error.message,
        });
    }
};

export const getAllPosts = async (req, res, next) => {
    try {
        console.log(req.body);
        const query = `SELECT * FROM post;`;

        con.query(query, function (err, result) {
            console.log(result);
            if (err)
                throw res.status(400).json({
                    message: "400 bad request",
                    data: err.message,
                });
            res.status(200).json({
                message: "200 success get",
                data: result,
            });
        });
    } catch (error) {
        res.status(400).json({
            message: "400 bad request",
            data: error.message,
        });
    }
};

export const searchPosts = async (req, res, next) => {
    try {
        console.log(req.body);
        var selectField = req.body._field || "*";
        var querySearch = req.body.query;
        const query = `SELECT ${selectField} FROM post WHERE ${querySearch};`;
        con.query(query, function (err, result) {
            console.log(result);
            if (err)
                throw res.status(400).json({
                    message: "400 bad request",
                    data: err.message,
                });

            res.status(200).json({
                message: "200 success get",
                data: result,
            });
        });
    } catch (error) {
        res.status(400).json({
            message: "400 bad request",
            data: error.message,
        });
    }
};

export const updatePosts = async (req, res, next) => {
    try {
        console.log(req.body);
        var dataUpdate = req.body;
        var queryUpdate = "";
        for (const [key, value] of Object.entries(dataUpdate)) {
            if (key != "id") {
                if (typeof value == "string") {
                    queryUpdate += `${key}='${value}',`;
                }
                if (typeof value == "number") {
                    queryUpdate += `${key}=${value},`;
                }
            }
        }
        queryUpdate += `update_at = current_timestamp()`;
        const query = `UPDATE post SET ${queryUpdate}  WHERE id=${req.body?.id};`;
        console.log(query);
        con.query(query, function (err, result) {
            console.log(result);
            if (err)
                throw res.status(400).json({
                    message: "400 bad request",
                    data: err.message,
                });

            res.status(200).json({
                message: "200 success put",
                data: req.body,
            });
        });
    } catch (error) {
        res.status(400).json({
            message: "400 bad request",
            data: error.message,
        });
    }
};

export const deletePosts = async (req, res, next) => {
    try {
        console.log(req.body);
        const query = `DELETE FROM post WHERE id=${req.body?.id};`;
        console.log(query);
        con.query(query, function (err, result) {
            console.log(result);
            if (err)
                throw res.status(400).json({
                    message: "400 bad request",
                    data: err.message,
                });

            res.status(200).json({
                message: "200 success delete",
                data: req.body,
            });
        });
    } catch (error) {
        res.status(400).json({
            message: "400 bad request",
            data: error.message,
        });
    }
};
