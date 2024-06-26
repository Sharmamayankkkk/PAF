import { Pet } from "../pet/Pet";
import { User } from "../user/User";

export type Review = {
  createdAt: Date;
  id: string;
  pets?: Pet | null;
  rating: number;
  updatedAt: Date;
  user?: User | null;
};
