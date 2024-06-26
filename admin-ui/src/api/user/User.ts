import { Order } from "../order/Order";
import { Review } from "../review/Review";
import { JsonValue } from "type-fest";

export type User = {
  admin: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  reviews?: Array<Review>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
