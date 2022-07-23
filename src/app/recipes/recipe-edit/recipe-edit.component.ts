import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  editMode :boolean=false;
  name:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.name = params['name'];
      this.editMode = params['name'] !=null;
    })
    // if(name===undefined){
    //   this.editMode = false;
    // }else{
    //   this.editMode = true;
    // }
  }

}
