import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PetCategoryService } from "./petCategory.service";
import { PetCategoryControllerBase } from "./base/petCategory.controller.base";

@swagger.ApiTags("petCategories")
@common.Controller("petCategories")
export class PetCategoryController extends PetCategoryControllerBase {
  constructor(
    protected readonly service: PetCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
