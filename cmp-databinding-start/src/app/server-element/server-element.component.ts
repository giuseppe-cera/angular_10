import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @ViewChild('heading', {static: true})
  heading: ElementRef;

  @ContentChild('contentParagraph', {static: true}) 
  paragraph: ElementRef;

  @Input()
  element: { type: string, name: string, content: string };

  @Input()
  name: string;

  constructor() {
    console.log('constructor called!');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' +  this.heading.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log('changes: ' + changes);
  }

}
