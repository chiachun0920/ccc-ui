import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownListBoxComponent } from './dropdown-list-box.component';
import { ListBoxModule } from '../list-box/list-box.module';

@NgModule({
  imports: [
    CommonModule,
    ListBoxModule
  ],
  declarations: [
    DropdownListBoxComponent
  ],
  exports: [
    DropdownListBoxComponent
  ]
})
export class DropdownListBoxModule { }
