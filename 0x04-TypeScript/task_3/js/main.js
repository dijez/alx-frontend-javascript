"use strict";
/// <reference path="./crud.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./crud");
// import { insertRow } from "./crud";
// import { updateRow } from "./crud";
var row = {
    firstName: "Guillaume",
    lastName: "Salva",
};
var newRowID = CRUD.insertRow(row);
var updateRow = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23
};
CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
