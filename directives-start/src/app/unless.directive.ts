import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.vsRef.createEmbeddedView(this.templateRef);
    } else {
      this.vsRef.clear();
    }
  };

  constructor(private templateRef: TemplateRef<any>, private vsRef: ViewContainerRef) {

   }

}
