import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Test Recipe 2', 'This is simply another test', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];
  @Output() itemGotSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  selectedItem(selectedItem:Recipe){
      this.itemGotSelected.emit(selectedItem);
  }

}
