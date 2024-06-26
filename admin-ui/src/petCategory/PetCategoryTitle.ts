import { PetCategory as TPetCategory } from "../api/petCategory/PetCategory";

export const PETCATEGORY_TITLE_FIELD = "name";

export const PetCategoryTitle = (record: TPetCategory): string => {
  return record.name?.toString() || String(record.id);
};
