import { createAction, props } from "@ngrx/store";


export const getArrangements = createAction('[arrangements] Get Arreangements');
export const setArrangements = createAction('[arrangements] Set Arreangements', props<{ arrangements: any }>());