import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount : ElementRef;
  @Output() IngredientDetails = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.IngredientDetails.emit(new Ingredient(this.ingredientName.nativeElement.value,this.ingredientAmount.nativeElement.value));
  }

}
