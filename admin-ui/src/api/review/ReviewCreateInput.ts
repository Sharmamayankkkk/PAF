import { PetWhereUniqueInput } from "../pet/PetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  pets?: PetWhereUniqueInput | null;
  rating: number;
  user?: UserWhereUniqueInput | null;
};
