import { PetCreateNestedManyWithoutPetCategoriesInput } from "./PetCreateNestedManyWithoutPetCategoriesInput";

export type PetCategoryCreateInput = {
  name: string;
  pets?: PetCreateNestedManyWithoutPetCategoriesInput;
};
