import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[left-panel-host]',
})
export class LeftPanelHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
