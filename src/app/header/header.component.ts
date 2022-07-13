import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed:boolean = true;
  @Output() pagename = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  OnSelect(feature:string){
    this.pagename.emit(feature);
  }

}
