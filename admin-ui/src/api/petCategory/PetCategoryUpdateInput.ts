import { PetUpdateManyWithoutPetCategoriesInput } from "./PetUpdateManyWithoutPetCategoriesInput";

export type PetCategoryUpdateInput = {
  name?: string;
  pets?: PetUpdateManyWithoutPetCategoriesInput;
};
