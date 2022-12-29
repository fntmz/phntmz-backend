import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const PeopleSchema = new mongoose.Schema({
    roles: [String],
    socials: [
        {
            type: {
                name: String,
                href: String,
            },
            default: "no social outlets",
        },
    ],
    photo: {
        data: Buffer,
        contentType: String,
    },
});

const myDB = mongoose.connection.useDb("phntmz-rework");

const PeopleModel = myDB.model("people", PeopleSchema, "People");

export default PeopleModel;
