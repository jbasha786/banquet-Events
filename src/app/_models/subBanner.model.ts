export interface subBannerModel {
    src: string;
    desc: string;
}

export interface subBannerStateModel {
    isLoading: boolean;
    subBanner: subBannerModel;
    error: string;
}