import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen: boolean = false;

    // @HostListener('click') toggleOpen() {
    //     this.isOpen=!this.isOpen;
    // }
    // if we want to close dropdown by clicking anywhere on document then this code - 
    @HostListener('document:click',['$event']) toggleOpen(event:Event){
        this.isOpen = this.elementref.nativeElement.contains(event.target)? !this.isOpen: false;
    }
    constructor(private elementref: ElementRef){
    }
        // however this solution is not optimized as upon every click on document , it will trigger toggleOpen()
}