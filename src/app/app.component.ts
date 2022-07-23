import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  // pagenameapp:string = 'Recipe';
  timeout: any;
  // PageToDisp(pagename:string){
  //   this.pagenameapp=pagename;
  // }
  ngAfterViewInit(): void {
    this.timeout = setTimeout(()=>{alert('This Webapp is a work in progress, it currently focuses on providing best user experience and will be later improved for a better UI as well.')},3000);
  }
}
