import { createSelector } from "@ngrx/store";
import { ArrangementsStateInterface } from "../../_types/arrangements.interface";


export const arrangementfeature = (state: ArrangementsStateInterface) => state.arrangements;

export const arrangementSelector = createSelector(
    arrangementfeature,
    (state) => state.arrangements
)