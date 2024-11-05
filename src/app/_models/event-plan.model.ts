import { BaseModel } from "../shared/_models/headerModel";

export interface EventPlanModel extends BaseModel {
    src: string;
    name: string;
}