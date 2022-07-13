import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pagenameapp:string = 'Recipe';
  PageToDisp(pagename:string){
    this.pagenameapp=pagename;
  }
}
