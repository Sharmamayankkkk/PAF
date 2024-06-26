import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { PetCategoryTitle } from "../petCategory/PetCategoryTitle";
import { ReviewTitle } from "../review/ReviewTitle";

export const PetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <div />
        <NumberInput label="discountedPrice" source="discountedPrice" />
        <div />
        <ReferenceInput source="order.id" reference="Order" label="orders">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="petCategory.id"
          reference="PetCategory"
          label="Pet-Categories"
        >
          <SelectInput optionText={PetCategoryTitle} />
        </ReferenceInput>
        <ReferenceInput source="review.id" reference="Review" label="reviews">
          <SelectInput optionText={ReviewTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
        <NumberInput label="titlePrice" source="titlePrice" />
        <div />
      </SimpleForm>
    </Create>
  );
};
