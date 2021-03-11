import { Directive, ElementRef, HostListener, Input } from "@angular/core";
@Directive({
  selector: "[onlyNumber]"
})
export class OnlyNumberDirective {
  @Input() onlyNumber: boolean = false;
  constructor(private el: ElementRef) {}
  @HostListener("keydown", ["$event"])
  onKeytest(event) {
    let e = <KeyboardEvent>event;
    console.log(`OnKey function ${e} - ${this.onlyNumber}`);
  }
}
