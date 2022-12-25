import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  
  getAllFoodByTag(tag:string):Foods[]{
      
      return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags ?.includes(tag));
      
  }

  getAllTag():Tag[]{
      return [
        {name:'All',count:12},
        {name:'FastFood',count:7},
        {name:'Lunch',count:11},
        {name:'Dinner',count:3},
        {name:'Pizza',count:6},
        {name:'Breakfast',count:2}
        
      ];
  }

  getFoodById(id:number):Foods{
     return this.getAll().find(food => food.id == id)!;
  }

  getAll():Foods[]{
    return[
      {
        id:1,
        name:'Pasta',
        cookTime:'10-20',
        price:10,
        favourite:false,
        origins:['Italy'],
        star:4.5,
        imageUrl:'/assets/food-1.jpg',
        tags:['FastFood','Pizza','Lunch'],

      },
      {
        id:2,
        name:'Fish',
        cookTime:'20-30',
        price:20,
        favourite:false,
        origins:['Indian','Peru'],
        star:4.7,
        imageUrl:'/assets/food-2.webp',
        tags:['Dinner','Lunch'],

      },
      {
        id:3,
        name:'French-fries',
        cookTime:'10-15',
        price:10,
        favourite:false,
        origins:['Italy','middle-east'],
        star:5.0,
        imageUrl:'/assets/food-3.jpg',
        tags:['FastFood','Pizza','Lunch'],

      },
      {
        id:4,
        name:'Idli',
        cookTime:'10-15',
        price:10,
        favourite:false,
        origins:['South-Indian'],
        star:4,
        imageUrl:'/assets/food-4.jpg',
        tags:['Breakfast','Lunch'],

      },
      {
        id:5,
        name:'Maswadi',
        cookTime:'20-30',
        price:10,
        favourite:false,
        origins:['India-Maharashtrian'],
        star:5,
        imageUrl:'/assets/food-5.webp',
        tags:['Lunch','Dinner'],

      },
      {
        id:6,
        name:'Tandoori',
        cookTime:'10-20',
        price:10,
        favourite:false,
        origins:['Italy','Indian','China'],
        star:3,
        imageUrl:'/assets/food-6.jpg',
        tags:['Dinner','Lunch'],

      },
      {
        id:7,
        name:' Vegetables Pizza',
        cookTime:'20-30',
        price:10,
        favourite:false,
        origins:['Italy','America'],
        star:4,
        imageUrl:'/assets/food-7.jpg',
        tags:['FastFood','Pizza','Lunch'],

      },
      {
        id:8,
        name:'Roll',
        cookTime:'10-15',
        price:10,
        favourite:false,
        origins:['Indian'],
        star:4.5,
        imageUrl:'/assets/food-8.jpg',
        tags:['Breakfast','Lunch'],

      },
      {
        id:9,
        name:'Pizza Pepperoni',
        cookTime:'10-20',
        price:10,
        favourite:false,
        origins:['India-Maharashtrian'],
        star:4.5,
        imageUrl:'/assets/food-9.jpg',
        tags:['FastFood','Lunch','Pizza'],

      },
      {
        id:10,
        name:'Pizza Kids',
        cookTime:'10-15',
        price:10,
        favourite:false,
        origins:['Italy','America'],
        star:4.5,
        imageUrl:'/assets/food-10.webp',
        tags:['FastFood','Pizza'],

      },
      {
        id:11,
        name:'Manchurian balls',
        cookTime:'20-30',
        price:10,
        favourite:false,
        origins:['Italy','China'],
        star:3,
        imageUrl:'/assets/food-11.jpg',
        tags:['FastFood','Lunch'],

      },
      {
        id:12,
        name:'Burger',
        cookTime:'20-30',
        price:10,
        favourite:false,
        origins:['Italy','America'],
        star:4.5,
        imageUrl:'/assets/food-12.jpg',
        tags:['FastFood','Pizza','Lunch'],

      }
     
    ];
  }
}
