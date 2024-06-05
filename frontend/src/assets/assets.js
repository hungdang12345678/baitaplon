import food_1 from './food_1.jpg';
import food_2 from './food_2.png';
import food_3 from './food_3.jpg';
import food_4 from './food_4.jpg';
import logo from './logo.png';
import frontpage from './frontpage.jpg';
import menu_1 from './menu_1.jpg';
import menu_2 from './menu_2.jpg';
import menu_3 from './menu_3.jpg';


import search from './icons8-search-24.png';
import add_1 from './icons8-add-24.png';
import add_2 from './icons8-add-24 (1).png';
import cross_1 from './icons8-cross-24.png';
import cross_2 from './icons8-cross-24 (1).png';
import basket_1 from './icons8-shopping-basket-24.png';
import basket_2 from './icons8-shopping-basket-24 (1).png';
import user_1 from './icons8-user-24.png';
import user_2 from './icons8-user-24 (1).png';

export const assets = {
  food_1,
  food_2,
  food_3,
  food_4,
  logo,
  frontpage,
  menu_1,
  menu_2,
  menu_3,
  search,
  add_1,
  add_2,
  cross_1,
  cross_2,
  basket_1,
  basket_2,
  user_1,
  user_2
};
export const menu_list = [
  {
    menu_name: "Miền Bắc",
    menu_image: menu_1
  },
  {
    menu_name: "Miền Trung",
    menu_image: menu_2

  },
  {
    menu_name: "Miền Nam",
    menu_image: menu_3
  }
]
export const food_list = [
  {
    food_id: "1",
    food_name: "Gà kho sả ớt",
    food_image: food_1,
    food_recipe: "s",
    food_description: "Một trong những món ăn khá phổ biến trong bữa cơm người Việt ở khắp vùng miền là gà kho sả ớt. Tuy nhiên, cách làm gà kho sả ớt miền Bắc, miền Trung, Nam sẽ khác nhau đôi chút",
    food_category: "Miền Trung",
    food_difficulty: "Khó"
  },
  {
    food_id: "2",
    food_name: "Trứng chiên mắm",
    food_image: food_2,
    food_recipe: "s",
    food_description: "Các món chiên được làm từ trứng gà như trứng ốp la hay ốp lết đã quá quen thuộc, nếu bạn muốn thử đổi vị thì hãy thử làm món trứng chiên nước mắm siêu ngon siêu dễ, ăn với cơm hay bánh mì đều bá cháy.",
    food_category: "Miền Bắc",
    food_difficulty: "Khó"
  },
  {
    food_id: "3",
    food_name: "Ba chỉ kho mắm ruốc",
    food_image: food_3,
    food_recipe: "s",
    food_description: "Thịt ba chỉ kho mắm ruốc là món ăn quen thuộc, đậm đà bản sắc của người Huế.",
    food_category: "Miền Trung",
    food_difficulty: "Khó"
  }, {
    food_id: "4",
    food_name: "Cá nục kho nghệ",
    food_image: food_4,
    food_recipe: "s",
    food_description: "Cá nục là một nguyên liệu phổ biến thường được các mọi người dùng để chế biến trong các bữa cơm gia đình.",
    food_category:"Miền Nam",
    food_difficulty: "Khó"
  }]