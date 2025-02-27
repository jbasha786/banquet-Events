import { createSelector } from "@ngrx/store";
import { PersonalizedStateModel } from "../../_models/personalized.model";
import { PersonalizedInterfaceModel } from "../../_types/personalized.interface";


export const personalizedInfo = (state: PersonalizedInterfaceModel) => state.personalized;

export const personalizedSelector = createSelector(
    personalizedInfo,
    (state) => state.personalized
)