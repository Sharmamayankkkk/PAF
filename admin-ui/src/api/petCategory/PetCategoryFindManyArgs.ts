import { PetCategoryWhereInput } from "./PetCategoryWhereInput";
import { PetCategoryOrderByInput } from "./PetCategoryOrderByInput";

export type PetCategoryFindManyArgs = {
  where?: PetCategoryWhereInput;
  orderBy?: Array<PetCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
