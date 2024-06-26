/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PetCategoryWhereUniqueInput } from "./PetCategoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PetCategoryUpdateInput } from "./PetCategoryUpdateInput";

@ArgsType()
class UpdatePetCategoryArgs {
  @ApiProperty({
    required: true,
    type: () => PetCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PetCategoryWhereUniqueInput)
  @Field(() => PetCategoryWhereUniqueInput, { nullable: false })
  where!: PetCategoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PetCategoryUpdateInput,
  })
  @ValidateNested()
  @Type(() => PetCategoryUpdateInput)
  @Field(() => PetCategoryUpdateInput, { nullable: false })
  data!: PetCategoryUpdateInput;
}

export { UpdatePetCategoryArgs as UpdatePetCategoryArgs };