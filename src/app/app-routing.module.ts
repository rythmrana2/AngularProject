import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { SelectRecipeComponent } from "./recipes/select-recipe/select-recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes=[
    {path:'recipes', component: RecipesComponent, children:[
        {path:'', component: SelectRecipeComponent},
        {path:':name', component: RecipeDetailComponent}
    ]},
    {path:'', redirectTo:'/recipes', pathMatch:'full'},
    {path:'shopping-list', component: ShoppingListComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}