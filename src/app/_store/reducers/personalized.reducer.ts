import { createReducer, on } from "@ngrx/store";
import { PersonalizedStateModel } from "../../_models/personalized.model";
import * as personalizedAction from "../actions/peronalized.action";


export const initialState: PersonalizedStateModel = {
    isLoading: false,
    personalized: [],
    error: ''
};

export const personalizedReducer = createReducer(
    initialState,
    on(personalizedAction.getPersonalizedInfo, (state) => ({ ...state, isLoading: true })),
    on(personalizedAction.setPersonalizedInfo, (state, { personalized }) => ({ ...state, isLoading: true, personalized }))
)