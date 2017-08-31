import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { PanelBarModule } from "../panel-bar.module";
import { PanelBarDemoComponent } from './panel-bar-demo.component';

@NgModule({
    imports: [PanelBarModule, CommonModule],
    declarations: [PanelBarDemoComponent],
    exports: [PanelBarDemoComponent]
})
export class PanelBarDemoModule { }