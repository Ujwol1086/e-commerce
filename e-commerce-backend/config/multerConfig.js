const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) =>
        {
            cb(null, path.join(__dirname, "../uploads"));
        },
        filename: (req, file, cb) =>
        {
            let customFileName = crypto.randomBytes(18).toString("hex"),
                fileExtension = file.originalname.split(".")[1];
            cb(null, customFileName + "." + fileExtension);
        }
    })
});

module.exports = upload;
