import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    successfullAlert = new Subject<void>();
    private recipes: Recipe[] = [
        new Recipe('A Big Fat Burger', 'What else do I need to say!', 'https://www.stockvault.net/data/2016/04/19/194274/preview16.jpg',[
          new Ingredient('Patty', 1), new Ingredient('Buns', 2), new Ingredient('Lettuce', 3)
        ]),
        new Recipe('LuLu Pizza', 'Best Italian Dish Ever!!', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/8/23/0/FNM_100116-Classic-Crust_s4x3.jpg.rend.hgtvcom.826.620.suffix/1480972867043.jpeg', [
          new Ingredient('Refined Flour', 10), new Ingredient('Toppings',3), new Ingredient('Ketchup', 1)
        ])
      ];
      constructor(private shoppinglistservice: ShoppingListService){

      }
      getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(name:string){
      for(let recipe of this.recipes.slice()){
        //the slice of recipes will create a shallow copy of recipes array, meaning the objects inside the new array will be not be copied but will be pointing to 
        //the objects inside the original array, therefore changing the properties of objects inside the copy array will cause change of
        // properties of original array as well. therefore you can return a deepcopy of an object so that the original objects are not affected.
        //therefore here ding slice or not doesnt matter when returning object
        if(recipe.name === name){
          return recipe;
        }
      }
  }
    toShoppingList(ingredients: Ingredient[]){
      for(let ingredient of ingredients){
        this.shoppinglistservice.addIngredients(ingredient);
      }
      this.shoppinglistservice.IngredientSubmitted.next();
      this.successfullAlert.next();
    }
}