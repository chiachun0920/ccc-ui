import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[right-panel-host]',
})
export class RightPanelHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
