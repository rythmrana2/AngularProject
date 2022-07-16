import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input()  ItemtoDisplay:Recipe;
  constructor(private recipeservice: RecipeService) { }

  ngOnInit(): void {
  }
  onToShoppingList(){
    this.recipeservice.toShoppingList(this.ItemtoDisplay.ingredients);
  }

}
