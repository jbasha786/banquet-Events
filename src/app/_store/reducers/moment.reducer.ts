import { createReducer, on } from "@ngrx/store";
import { MomentStateModel } from "../../_models/moment.model";
import * as momentActions from "../actions/moment.action";

export const initialState: MomentStateModel = {
    isLoading: false,
    momentInfo: [],
    error: ''
}

export const momentReducer = createReducer(
    initialState,
    on(momentActions.getMomentInfo, (state) => ({ ...state, isLoading: true })),
    on(momentActions.setMomentInfo, (state, { momentInfo }) => ({ ...state, isLoading: true, momentInfo }))
)