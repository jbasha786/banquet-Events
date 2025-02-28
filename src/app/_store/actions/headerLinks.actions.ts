import { createAction, props } from "@ngrx/store";

export const getHeaderLinks = createAction('[HedaerLinks] Get HeaderLink');
export const setHeaderLinks = createAction('[HeaderLinks] Set HeaderLink', props<{headerLink: any}>());