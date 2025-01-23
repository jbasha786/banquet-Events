export interface BaseModel {
    id: number;
}
export interface headerModel extends BaseModel {
    src: string;
    name: string;
    link: string;
    eventName : string;
    hoverSrc : string;
}