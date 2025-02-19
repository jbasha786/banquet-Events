import { createAction, props } from "@ngrx/store";


export const getBanner = createAction('[Banner] Get Banner');
export const setBanner = createAction('[Banner] Set Banner', props<{banner: any}>());