export interface BaseModel {
    id: number;
}
export interface headerFlowModel extends BaseModel {
    eventName : string;
    eventLink: any;
}
export interface HeaderFlowStateModel {
    isLoading: boolean;
    headerFlow: headerFlowModel[];
    error: string | null;
}