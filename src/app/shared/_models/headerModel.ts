export interface baseModel {
    id: number;
}
export interface headerModel extends baseModel {
    src: string;
    name: string;
    link: string;
    eventName : string;
}