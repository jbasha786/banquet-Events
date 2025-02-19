import { createSelector } from "@ngrx/store";
import { BannerStateInterface } from "../../_types/bannerState.interface";


export const selectFeature = (state: BannerStateInterface) => state.banner;


export const bannerSelector = createSelector(
    selectFeature, 
    (state) => state.banner
);