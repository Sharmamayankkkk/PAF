import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { PetCategoryWhereUniqueInput } from "../petCategory/PetCategoryWhereUniqueInput";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type PetCreateInput = {
  colors?: InputJsonValue;
  description: InputJsonValue;
  discountedPrice: number;
  images: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  petCategory?: PetCategoryWhereUniqueInput | null;
  review?: ReviewWhereUniqueInput | null;
  title: string;
  titlePrice: number;
  variants: InputJsonValue;
};
