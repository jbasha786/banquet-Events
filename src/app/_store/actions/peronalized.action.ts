import { createAction, props } from "@ngrx/store";

export const getPersonalizedInfo = createAction('[personalized] Get PersonalizedInfo');
export const setPersonalizedInfo = createAction('[personalized] Set PersonalizedInfo', props<{ personalized: any }>());