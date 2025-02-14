import { createReducer, on } from "@ngrx/store";
import { BannerStateModel } from "../../_models/banner.model";

import * as PostsActions from "../actions/banner.action";


export const initialState: BannerStateModel = {
    isLoading: false,
    banner: {
        title: '',
        buttonName: '',
        desc: '',
        subTitle: ''
    },
    error: null,
}


export const bannerReducer = createReducer(
    initialState,
    on(PostsActions.getBanner, (state: any) => ({ ...state, isLoading: true })),
    on(PostsActions.setBanner, (state, { banner }) => ({ ...state, isLoading: false, banner })),
);