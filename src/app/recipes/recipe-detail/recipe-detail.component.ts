import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input()  ItemtoDisplay:Recipe;
   ItemtoDisplay:Recipe;
  successAlert: boolean=false;
  constructor(private recipeservice: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeservice.successfullAlert.subscribe(()=>{
      this.successAlert=true;
      setTimeout(()=>{this.successAlert=false},2000);}
    );
    this.route.params.subscribe((params:Params)=>{
      this.ItemtoDisplay = this.recipeservice.getRecipe(params['name']);
    });
  }
  onToShoppingList(){
    this.recipeservice.toShoppingList(this.ItemtoDisplay.ingredients);
  }

}
