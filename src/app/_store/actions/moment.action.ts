import { createAction, props } from "@ngrx/store";

export const getMomentInfo = createAction('[moment] Get Moments');
export const setMomentInfo = createAction('[moment] Get Moments', props<{ momentInfo: any }>());