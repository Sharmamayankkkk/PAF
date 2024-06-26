import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PetCategoryServiceBase } from "./base/petCategory.service.base";

@Injectable()
export class PetCategoryService extends PetCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
