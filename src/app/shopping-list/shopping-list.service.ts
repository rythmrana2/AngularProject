import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService{
    IngredientSubmitted = new Subject<void>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];
    getIngredientsdatabase(){
        return this.ingredients.slice();
    }
    addIngredients(ingredient:Ingredient){
        let flag = 0;
        for(let ing of this.ingredients){
            if(ing.name===ingredient.name){
                ing.amount+=ingredient.amount;
                flag=1;
            }
        }
        if(flag===0){
            this.ingredients.push(ingredient);
        }
    }
    addIngredientss(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        //this is a spread operator which converts array of elements to list of elements as the push operator can handle multiple objects
        //but with an array it will insert the array as a single object
        this.IngredientSubmitted.next();
    }
}