import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed:boolean = true;
  // @Output() pagename = new EventEmitter<string>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // OnSelect(feature:string){
  //   // this.pagename.emit(feature);
  //   if(feature==='Recipe'){
  //     this.router.navigate(['/recipes']);
  //   }else if(feature==='List'){
  //     this.router.navigate(['/shopping-list']);
  //   }else{
  //     this.router.navigate(['/']);
  //   }
  // }
}
