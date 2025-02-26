export interface PersonalizedModel {
    id: string;
    src: string;
    name: string;
    desc: string;
    showFullContent: boolean;
}

export interface PersonalizedStateModel {
    isLoading: boolean;
    personalized: PersonalizedModel[];
    error: string;
}