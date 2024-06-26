import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { PETCATEGORY_TITLE_FIELD } from "../petCategory/PetCategoryTitle";
import { REVIEW_TITLE_FIELD } from "../review/ReviewTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="paymentintent" source="paymentintent" />
        <BooleanField label="paymentstatus" source="paymentstatus" />
        <TextField label="Price" source="price" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Pet" target="orderId" label="pets">
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="reviews"
              source="review.id"
              reference="Review"
            >
              <TextField source={REVIEW_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
            <TextField label="titlePrice" source="titlePrice" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Variants" source="variants" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
