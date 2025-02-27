import { createAction, props } from "@ngrx/store";


export const getliveEvents = createAction('[liveEvents] Get liveEvents');
export const setliveEvents = createAction('[liveEvents] Set liveEvents', props<{liveEvents: any}>());