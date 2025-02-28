import { createSelector } from "@ngrx/store";
import { headerFlowStateInterface} from "../../_types/headerState.interface";

export const headerFlowInfo = (state: headerFlowStateInterface) => state.headerFlow;

export const headerFlowSelector = createSelector(
    headerFlowInfo, 
    (state) => state.headerFlow
);