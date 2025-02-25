import { createReducer, on } from "@ngrx/store";
import { liveEventsStateModel } from "../../_models/liveEvents.model";
import * as LiveEventsAction from "../actions/liveEvents.action";


export const initialState: liveEventsStateModel = {
    isLoading: false,
    liveEvents: {
    title: '',
    src: '',
    desc: '',
    btn: ''
    },
    
    error: ''
};

export const liveEventsReducer = createReducer(
    initialState,
    on(LiveEventsAction.getliveEvents, (state) => ({ ...state, isLoading: true })),
    on(LiveEventsAction.setliveEvents, (state, { liveEvents }) => ({ ...state, isLoading: true, liveEvents }))
)