import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Editing",
    imgurl: '/Images/video.jpg'
  },
  {
    _id: uuid(),
    categoryName: "Transitions",
    imgurl: '/Images/video.jpg',
  },
  {
    _id: uuid(),
    categoryName: "Cinematics",
    imgurl: '/Images/video.jpg'
  },
  {
    _id: uuid(),
    categoryName: "Videography",
    imgurl: '/Images/video.jpg'
  }
];
