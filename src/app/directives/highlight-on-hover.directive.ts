import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]'
})
export class HighlightOnHoverDirective {

  @Input() appHighlightOnHover: string = "yellow";

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter") addBackground(): void {
    this.el.nativeElement.style.backgroundColor = this.appHighlightOnHover || "yellow";
  }

  @HostListener("mouseout") removeBackground(): void {
    this.el.nativeElement.style.backgroundColor = "white";
  }
}
