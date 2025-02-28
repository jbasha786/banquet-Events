import { createReducer, on } from "@ngrx/store";
import * as PostsActions from "../actions/headerLinks.actions"
import { HeaderLinkStateModel } from "../../shared/_models/headerLinks.model";

export const initialState: HeaderLinkStateModel = {
    isLoading: false,
    headerLink: [],
    error: null,
}

export const headerLinkReducer = createReducer(
    initialState,
    on(PostsActions.getHeaderLinks, (state: any) => ({ ...state, isLoading: true })),
    on(PostsActions.setHeaderLinks, (state, { headerLink }) => ({ ...state, isLoading: false, headerLink })),
);