import CreditModel from "../models/CreditModel.js";
import {
    CreateRecord,
    DeleteRecord,
    GetAllRecords,
    ReadRecord,
    UpdateRecord,
} from "../crudFunction.js";

export const CreateCredit = CreateRecord(CreditModel);
export const GetCredit = DeleteRecord(CreditModel);
export const GetAllCredits = GetAllRecords(CreditModel);
export const UpdateCredit = ReadRecord(CreditModel);
export const DeleteCredit = UpdateRecord(CreditModel);
