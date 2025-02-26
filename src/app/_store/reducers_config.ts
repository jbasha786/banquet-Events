import { bannerReducer } from "./reducers/banner.reducer";
import { personalizedReducer } from "./reducers/personalized.reducer";
import { liveEventsReducer } from "./reducers/liveEvents.reducers";
import { subBannerReducer } from "./reducers/subBanner.reducer";

export const reducers = {
    banner: bannerReducer,
    subBanner: subBannerReducer,
    personalized: personalizedReducer,
    liveEvents: liveEventsReducer
}