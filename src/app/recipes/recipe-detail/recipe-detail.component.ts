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
  successAlert: boolean=false;
  constructor(private recipeservice: RecipeService) { }

  ngOnInit(): void {
    this.recipeservice.successfullAlert.subscribe(()=>{
      this.successAlert=true;
      setTimeout(()=>{this.successAlert=false},2000);}
    );
  }
  onToShoppingList(){
    this.recipeservice.toShoppingList(this.ItemtoDisplay.ingredients);
  }

}
