import { bannerReducer } from "./reducers/banner.reducer";
import { personalizedReducer } from "./reducers/personalized.reducer";
import { liveEventsReducer } from "./reducers/liveEvents.reducers";
import { subBannerReducer } from "./reducers/subBanner.reducer";
import { headerReducer } from "./reducers/header.reducer";
import { headerLinkReducer } from "./reducers/headerLinks.reducer";
import { arrangementReducer } from "./reducers/arrangements.reducer";
import { experienceReducer } from "./reducers/experience.reducer";
import { momentReducer } from "./reducers/moment.reducer";

export const reducers = {
    banner: bannerReducer,
    subBanner: subBannerReducer,
    personalized: personalizedReducer,
    liveEvents: liveEventsReducer,
    headerFlow: headerReducer,
    headerLink: headerLinkReducer,
    arrangements: arrangementReducer,
    experience: experienceReducer,
    momentInfo: momentReducer
}