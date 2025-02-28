import { BaseModel } from "../shared/_models/headerFlow.model";

export interface menuModel extends BaseModel {
    id: number;
    menuHeaders: string;
    itemName: string;
    quantity: string;
    price: string;
}