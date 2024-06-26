import { PetCreateNestedManyWithoutOrdersInput } from "./PetCreateNestedManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  paymentintent?: string | null;
  paymentstatus?: boolean | null;
  pets?: PetCreateNestedManyWithoutOrdersInput;
  price?: number | null;
  status?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
