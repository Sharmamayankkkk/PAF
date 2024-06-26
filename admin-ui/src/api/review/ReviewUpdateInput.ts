import { PetWhereUniqueInput } from "../pet/PetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  pets?: PetWhereUniqueInput | null;
  rating?: number;
  user?: UserWhereUniqueInput | null;
};
