import { createSelector } from "@ngrx/store";
import { ExperienceStateInterface } from "../../_types/experience.interface";

export const experienceFeature = (state: ExperienceStateInterface) => state.experience;

export const experienceSelector = createSelector(
    experienceFeature,
    (state) => state.experience
)