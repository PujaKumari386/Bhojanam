import { foods } from "./food";

export class CartItem{
  constructor(public food:foods){ }
  quantity:number = 1 ;
  price: number = this.food.price;
}