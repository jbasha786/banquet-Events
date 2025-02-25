import { createSelector } from "@ngrx/store";
import { liveEventsStateInterface } from "../../_types/liveEvents.interface";


export const selectFeature = (state: liveEventsStateInterface) => state.liveEvents;

export const liveEventsSelector = createSelector(
    selectFeature,
    (state) => state.liveEvents
)