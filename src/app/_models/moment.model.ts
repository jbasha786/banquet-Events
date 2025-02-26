export interface MomemtModel {
    id: number;
    name: string;
    src: string;
    desc: string;
    button: string;
}


export interface MomentStateModel {
    isLoading: boolean;
    momentInfo: MomemtModel[];
    error: string;
}