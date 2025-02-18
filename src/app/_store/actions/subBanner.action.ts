import { createAction, props } from "@ngrx/store";

export const getSubBanner = createAction('[subBanner] Get Sub Banner');
export const setSubBanner = createAction('[subBanner] Set Sub Banner', props<{subBanner: any}>());