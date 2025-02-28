export interface BaseModel {
    id: number;
}
export interface headerLinkModel extends BaseModel {
    src: string;
    name: string;
    link: string;
    hoverSrc : string;
}
export interface HeaderLinkStateModel {
    isLoading: boolean;
    headerLink: headerLinkModel[];
    error: string | null;
}