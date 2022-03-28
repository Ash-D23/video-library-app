import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Editing"
  },
  {
    _id: uuid(),
    categoryName: "Transitions"
  },
  {
    _id: uuid(),
    categoryName: "Cinematics"
  },
  {
    _id: uuid(),
    categoryName: "Videography"
  }
];
