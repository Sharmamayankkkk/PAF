import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PetListRelationFilter } from "../pet/PetListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  paymentintent?: StringNullableFilter;
  paymentstatus?: BooleanNullableFilter;
  pets?: PetListRelationFilter;
  price?: FloatNullableFilter;
  status?: JsonFilter;
  user?: UserWhereUniqueInput;
};
