export interface liveEventsModel {
    title: string,
    src: string,
    desc: string,
    btn: string
}

export interface liveEventsStateModel {
    isLoading: boolean;
    liveEvents: liveEventsModel;
    error: string;
}