import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { PetCategoryWhereUniqueInput } from "../petCategory/PetCategoryWhereUniqueInput";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type PetWhereInput = {
  colors?: JsonFilter;
  description?: JsonFilter;
  discountedPrice?: FloatFilter;
  id?: StringFilter;
  images?: JsonFilter;
  order?: OrderWhereUniqueInput;
  petCategory?: PetCategoryWhereUniqueInput;
  review?: ReviewWhereUniqueInput;
  title?: StringFilter;
  titlePrice?: FloatFilter;
  variants?: JsonFilter;
};
