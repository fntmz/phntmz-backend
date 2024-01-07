import multer from "multer";
import path from "path";

const FileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!allowedTypes.includes(file.mimetype)) {
        const error = new Error("Wrong file type");
        error.code = "INCORRECT_FILETYPE";
        return cb(error, false);
    }
    cb(null, true);
};
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/postsImages");
    },
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname),
        );
    },
    fileFilter: FileFilter,
    limits: {
        fileSize: 5000000,
    },
});

const upload = multer({ storage: storage });

export const createPostsMedia = (req, res, next) => {
    upload.single("image")(req, res, function (err) {
        if (err) {
            return res.status(400).json({
                message: "400 bad request",
                data: err.message,
            });
        }

        const fileUrl = `http://localhost:8306/postsImages/${req.file.filename}`;

        res.status(200).json({
            message: "200 success upload",
            filename: req.file.filename,
            fileUrl: fileUrl,
        });
    });
};
