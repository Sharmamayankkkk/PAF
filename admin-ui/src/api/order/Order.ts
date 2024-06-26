import { Pet } from "../pet/Pet";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  paymentintent: string | null;
  paymentstatus: boolean | null;
  pets?: Array<Pet>;
  price: number | null;
  status: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
