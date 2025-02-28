export interface ExperienceModel {
    id: number;
    title: string;
    description: string;
    altText: string;
    src: string;
}

export interface ExperienceStateModel {
    isLoading: boolean;
    experience: any;
    error: string;
}