import { Pet as TPet } from "../api/pet/Pet";

export const PET_TITLE_FIELD = "title";

export const PetTitle = (record: TPet): string => {
  return record.title?.toString() || String(record.id);
};
