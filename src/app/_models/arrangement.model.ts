import { PersonalizedModel } from "./personalized.model";

export interface ArrangementsStateModel {
    isLoading: boolean;
    arrangements: PersonalizedModel[];
    error: string;
}