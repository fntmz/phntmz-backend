import PeopleModel from "../models/PeopleModel.js";
import {
    CreateRecord,
    DeleteRecord,
    GetAllRecords,
    ReadRecord,
    UpdateRecord,
} from "../crudFunction.js";

export const CreatePeople = CreateRecord(PeopleModel);
export const GetPeople = DeleteRecord(PeopleModel);
export const GetAllPeople = GetAllRecords(PeopleModel);
export const UpdatePeople = ReadRecord(PeopleModel);
export const DeletePeople = UpdateRecord(PeopleModel);
