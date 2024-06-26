import { SortOrder } from "../../util/SortOrder";

export type PetOrderByInput = {
  colors?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discountedPrice?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  orderId?: SortOrder;
  petCategoryId?: SortOrder;
  reviewId?: SortOrder;
  title?: SortOrder;
  titlePrice?: SortOrder;
  updatedAt?: SortOrder;
  variants?: SortOrder;
};
