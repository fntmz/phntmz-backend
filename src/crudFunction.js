import AppError from "./utils/AppError.js";

export function CreateRecord(Model) {
    return async (req, res, next) => {
        try {
            const record = await Model.create(req.body);
            res.status(200).json({
                status: "200 success",
                data: {
                    data: record,
                },
            });
            req.body._id = record._id;
            next();
        } catch (err) {
            res.status(400).json({
                status: "400 bad request",
                data: err.message,
            });
        }
    };
}

export function ReadRecord(Model, popOptions, select) {
    return async (req, res, next) => {
        try {
            const id = req.params.id;
            let query = await Model.findById(id);
            if (popOptions) {
                popOptionsArray.forEach((pop) => {
                    query = query.populate(pop);
                });
            }
            if (select) query = query.select(select.join(" "));
            const record = await query;
            if (!record) {
                return next(new AppError("404 not found", 404));
            }
            res.status(200).json({
                status: "200 success",
                data: {
                    data: record,
                },
            });
        } catch (err) {
            res.status(400).json({
                status: "400 bad request",
                data: err.message,
            });
        }
    };
}

export function UpdateRecord(Model) {
    return async (req, res, next) => {
        try {
            const id = req.body._id;
            if (!id) {
                res.status(400).json({
                    status: "400 bad request",
                    data: "_id is null",
                });
            } else {
                const record = await Model.findByIdAndUpdate(id, req.body, {
                    new: true,
                    upsert: true,
                    runValidator: true,
                    setDefaultsOnInsert: true,
                    context: "query",
                });
                if (!record) {
                    return next(new AppError("404 not found", 404));
                }
                res.status(200).json({
                    status: "200 success",
                    data: {
                        data: record,
                    },
                });
            }
        } catch (err) {
            res.status(400).json({
                status: "400 bad request",
                data: err.message,
            });
        }
    };
}

export function DeleteRecord(Model) {
    return async (req, res, next) => {
        try {
            const id = req.body._id;
            if (!id) {
                res.status(400).json({
                    status: "400 bad request",
                    data: "_id is null",
                });
            } else {
                const record = await Model.findByIdAndDelete(id);
                if (!record) {
                    return next(new AppError("404 not found", 404));
                }
                res.status(200).json({
                    status: "200 success",
                    data: {
                        data: "record removed",
                    },
                });
            }
        } catch (err) {
            res.status(400).json({
                status: "400 bad request",
                data: err.message,
            });
        }
    };
}

export function GetAllRecords(Model, populate, select) {
    return async (req, res) => {
        try {
            let query = Model.find().sort({ _id: -1 });
            if (select) query = query.select(select.join(" "));
            const record = await query;
            res.status(200).json({
                status: "200 success",
                results: record.length,
                data: {
                    data: record,
                },
            });
        } catch (err) {
            res.status(500).json({
                status: "500 server error",
                data: err.message,
            });
        }
    };
}
