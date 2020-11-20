import { Directive, ElementRef, OnInit } from "@angular/core";
import { Direct } from "protractor/built/driverProviders";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighLightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}