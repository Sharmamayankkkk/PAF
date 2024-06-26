import { PetUpdateManyWithoutOrdersInput } from "./PetUpdateManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  paymentintent?: string | null;
  paymentstatus?: boolean | null;
  pets?: PetUpdateManyWithoutOrdersInput;
  price?: number | null;
  status?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
