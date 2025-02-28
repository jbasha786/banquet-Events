import { createSelector } from "@ngrx/store";
import { headerLinkStateInterface } from "../../_types/headerLinksState.interface";

export const headerLinkInfo = (state: headerLinkStateInterface) => state.headerLink;

export const headerLinkSelector = createSelector(
    headerLinkInfo, 
    (state) => state.headerLink
);