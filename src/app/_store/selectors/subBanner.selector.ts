import { createSelector } from "@ngrx/store";
import { SubBannerStateInterface } from "../../_types/subBannerState.interface";


export const selectFeature = (state: SubBannerStateInterface) => state.subBanner;

export const subBannerSelector = createSelector(
    selectFeature,
    (state) => state.subBanner
)