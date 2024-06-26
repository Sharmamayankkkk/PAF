import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { PETCATEGORY_TITLE_FIELD } from "../petCategory/PetCategoryTitle";
import { REVIEW_TITLE_FIELD } from "../review/ReviewTitle";

export const PetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Colors" source="colors" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="discountedPrice" source="discountedPrice" />
        <TextField label="ID" source="id" />
        <TextField label="images" source="images" />
        <ReferenceField label="orders" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Pet-Categories"
          source="petcategory.id"
          reference="PetCategory"
        >
          <TextField source={PETCATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="reviews" source="review.id" reference="Review">
          <TextField source={REVIEW_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
        <TextField label="titlePrice" source="titlePrice" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Variants" source="variants" />
      </SimpleShowLayout>
    </Show>
  );
};
