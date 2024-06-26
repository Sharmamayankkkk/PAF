import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { PetCategory } from "../petCategory/PetCategory";
import { Review } from "../review/Review";

export type Pet = {
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  discountedPrice: number;
  id: string;
  images: JsonValue;
  order?: Order | null;
  petCategory?: PetCategory | null;
  review?: Review | null;
  title: string;
  titlePrice: number;
  updatedAt: Date;
  variants: JsonValue;
};
