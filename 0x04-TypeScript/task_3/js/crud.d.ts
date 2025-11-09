import { RowID } from "./interface";
import { RowElement } from "./interface";

export function insertRow(row: RowElement): RowID;
export function deleteRow(rowid: RowID): void;
export function updateRow(rowid: RowID, row: RowElement): RowID