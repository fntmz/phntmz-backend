import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const CreditsSchema = new mongoose.Schema({
    roles: String,
    people: Array,
});

const myDB = mongoose.connection.useDb("phntmz-rework");

const CreditsModel = myDB.model("Credits", CreditsSchema, "credits");

export default CreditsModel;
