import { createAction, props } from "@ngrx/store";

export const getExperience = createAction('[experience] Get Experience');
export const setExperience = createAction('[experience] Set Experience', props<{experience: any}>());