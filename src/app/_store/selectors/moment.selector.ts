import { createSelector } from "@ngrx/store";
import { MonemtStateInterface } from "../../_types/moment.interface";

export const momentFeatureData = (state: MonemtStateInterface) => state.momentInfo;

export const momentSeletor = createSelector(
    momentFeatureData,
    (state) => state.momentInfo
)