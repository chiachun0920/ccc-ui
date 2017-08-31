import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelBarItemComponent } from './panel-bar-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PanelBarItemComponent],
  exports: [PanelBarItemComponent]
})
export class PanelBarItemModule { }
