import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;
  constructor(private shoppinglistservice: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppinglistservice.getIngredientsdatabase();
    this.subscription = this.shoppinglistservice.IngredientSubmitted.subscribe(()=> {
      this.ingredients = this.shoppinglistservice.getIngredientsdatabase();
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
