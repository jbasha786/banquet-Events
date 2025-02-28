import { createReducer, on } from "@ngrx/store";
import { ExperienceStateModel } from "../../_models/experience.model";
import * as experienceAction from "../actions/experience.action";

export const initialState: ExperienceStateModel = {
    isLoading: false,
    experience: [],
    error: ''
}

export const experienceReducer = createReducer(
    initialState,
    on(experienceAction.getExperience, (state) => ({ ...state, isLoading: true })),
    on(experienceAction.setExperience, (state, { experience }) => ({ ...state, isLoading: false, experience }))
);