import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { PanelBarComponent } from './panel-bar.component';
import { PanelBarItemModule } from "./panel-bar-item";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PanelBarItemModule
  ],
  declarations: [PanelBarComponent],
  exports: [PanelBarComponent]
})
export class PanelBarModule { }
