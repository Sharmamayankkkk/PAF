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
import { PetWhereUniqueInput } from "../../pet/base/PetWhereUniqueInput";
import { ValidateNested, IsOptional, IsInt, Max } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class ReviewCreateInput {
  @ApiProperty({
    required: false,
    type: () => PetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PetWhereUniqueInput)
  @IsOptional()
  @Field(() => PetWhereUniqueInput, {
    nullable: true,
  })
  pets?: PetWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  rating!: number;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { ReviewCreateInput as ReviewCreateInput };
