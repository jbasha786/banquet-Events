import { createReducer, on } from "@ngrx/store";
import * as PostsActions from "../actions/header.action"
import { HeaderFlowStateModel } from "../../shared/_models/headerFlow.model";

export const initialState: HeaderFlowStateModel = {
    isLoading: false,
    headerFlow: [],
    error: null,
}

export const headerReducer = createReducer(
    initialState,
    on(PostsActions.getHeaderFlow, (state: any) => ({ ...state, isLoading: true })),
    on(PostsActions.setHeaderFlow, (state, { headerFlow }) => ({ ...state, isLoading: false, headerFlow })),
);