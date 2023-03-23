import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/assets/data';
import { foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): foods[] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): foods[] {
    return tag === "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getFoodById(foodId:string):foods{
    return this.getAll().find(food => food.id == foodId) ?? new foods();
  }
  //getFoodById(id:number): foods{
  //  return this.getAll().find(//food => food.id ==id)!;
  //}

}
