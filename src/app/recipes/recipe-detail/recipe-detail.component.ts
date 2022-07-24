import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  // @Input()  ItemtoDisplay:Recipe;
  ItemtoDisplay:Recipe;
  successAlert: boolean=false;
  alertsubscription : Subscription;
  constructor(private recipeservice: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.alertsubscription = this.recipeservice.successfullAlert.subscribe(()=>{
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
  ngOnDestroy(): void {
    this.alertsubscription.unsubscribe();
  }

}
