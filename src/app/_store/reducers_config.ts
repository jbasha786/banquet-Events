import { bannerReducer } from "./reducers/banner.reducer";
import { liveEventsReducer } from "./reducers/liveEvents.reducers";
import { subBannerReducer } from "./reducers/subBanner.reducer";

export const reducers = {
    banner: bannerReducer,
    subBanner: subBannerReducer,
    liveEvents: liveEventsReducer
}