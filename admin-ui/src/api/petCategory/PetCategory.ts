import { Pet } from "../pet/Pet";

export type PetCategory = {
  createdAt: Date;
  id: string;
  name: string;
  pets?: Array<Pet>;
  updatedAt: Date;
};
