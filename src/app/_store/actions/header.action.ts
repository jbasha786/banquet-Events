import { createAction, props } from "@ngrx/store";

export const getHeaderFlow = createAction('[HeaderFlow] Get Header');
export const setHeaderFlow = createAction('[HeaderFlow] Set Header', props<{headerFlow: any}>());