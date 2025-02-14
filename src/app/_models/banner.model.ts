export interface BannerModel {
    title: string;
    subTitle: string;
    desc: string;
    buttonName: string;

}

export interface BannerStateModel {
    isLoading: boolean;
    banner: BannerModel;
    error: string | null;
}