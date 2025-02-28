import { createReducer, on } from "@ngrx/store";
import { ArrangementsStateModel } from "../../_models/arrangement.model";
import * as arrangementActions from "../actions/arrangements.action";

export const initialState: ArrangementsStateModel = {
    isLoading: false,
    arrangements: [],
    error: ''
};

export const arrangementReducer = createReducer(
    initialState,
    on(arrangementActions.getArrangements, (state) => ({ ...state, isLoading: true })),
    on(arrangementActions.setArrangements, (state, { arrangements }) => ({ ...state, isLoading: true, arrangements }))
)