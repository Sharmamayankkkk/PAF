/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";

import {
  IsOptional,
  IsDate,
  IsNumber,
  Min,
  Max,
  IsString,
  ValidateNested,
  MaxLength,
} from "class-validator";

import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Type } from "class-transformer";
import { Order } from "../../order/base/Order";
import { PetCategory } from "../../petCategory/base/PetCategory";
import { Review } from "../../review/base/Review";

@ObjectType()
class Pet {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  colors!: JsonValue;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  description!: JsonValue;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @Field(() => Number)
  discountedPrice!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  images!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => Order,
  })
  @ValidateNested()
  @Type(() => Order)
  @IsOptional()
  order?: Order | null;

  @ApiProperty({
    required: false,
    type: () => PetCategory,
  })
  @ValidateNested()
  @Type(() => PetCategory)
  @IsOptional()
  petCategory?: PetCategory | null;

  @ApiProperty({
    required: false,
    type: () => Review,
  })
  @ValidateNested()
  @Type(() => Review)
  @IsOptional()
  review?: Review | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @Field(() => Number)
  titlePrice!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  variants!: JsonValue;
}

export { Pet as Pet };
