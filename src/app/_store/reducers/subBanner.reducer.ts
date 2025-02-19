import { createReducer, on } from "@ngrx/store";
import { subBannerStateModel } from "../../_models/subBanner.model";
import * as subBannerAction from "../actions/subBanner.action";


export const initialState: subBannerStateModel = {
    isLoading: false,
    subBanner: {
        src: '',
        desc: ''
    },
    error: ''
};

export const subBannerReducer = createReducer(
    initialState,
    on(subBannerAction.getSubBanner, (state) => ({ ...state, isLoading: true })),
    on(subBannerAction.setSubBanner, (state, { subBanner }) => ({ ...state, isLoading: true, subBanner }))
)