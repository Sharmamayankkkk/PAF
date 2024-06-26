/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PetCategoryWhereInput } from "./PetCategoryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PetCategoryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PetCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => PetCategoryWhereInput)
  @IsOptional()
  @Field(() => PetCategoryWhereInput, {
    nullable: true,
  })
  every?: PetCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => PetCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => PetCategoryWhereInput)
  @IsOptional()
  @Field(() => PetCategoryWhereInput, {
    nullable: true,
  })
  some?: PetCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => PetCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => PetCategoryWhereInput)
  @IsOptional()
  @Field(() => PetCategoryWhereInput, {
    nullable: true,
  })
  none?: PetCategoryWhereInput;
}
export { PetCategoryListRelationFilter as PetCategoryListRelationFilter };
