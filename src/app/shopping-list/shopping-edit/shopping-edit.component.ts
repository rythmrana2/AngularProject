import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount : ElementRef;

  constructor(private shoppinglistservice: ShoppingListService) { }

  ngOnInit(): void {
  }
  onClick(){
    this.shoppinglistservice.addIngredients(new Ingredient(this.ingredientName.nativeElement.value,+this.ingredientAmount.nativeElement.value));
    this.shoppinglistservice.IngredientSubmitted.next();
  }

}
