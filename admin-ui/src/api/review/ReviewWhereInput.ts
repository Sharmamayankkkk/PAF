import { StringFilter } from "../../util/StringFilter";
import { PetWhereUniqueInput } from "../pet/PetWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  pets?: PetWhereUniqueInput;
  rating?: IntFilter;
  user?: UserWhereUniqueInput;
};
