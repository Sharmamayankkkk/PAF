import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PetCategoryModuleBase } from "./base/petCategory.module.base";
import { PetCategoryService } from "./petCategory.service";
import { PetCategoryController } from "./petCategory.controller";
import { PetCategoryResolver } from "./petCategory.resolver";

@Module({
  imports: [PetCategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [PetCategoryController],
  providers: [PetCategoryService, PetCategoryResolver],
  exports: [PetCategoryService],
})
export class PetCategoryModule {}
