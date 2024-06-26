import { StringFilter } from "../../util/StringFilter";
import { PetListRelationFilter } from "../pet/PetListRelationFilter";

export type PetCategoryWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  pets?: PetListRelationFilter;
};
