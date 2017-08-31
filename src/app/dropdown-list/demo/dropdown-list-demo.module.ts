import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { DropdownListModule } from '../';

import { DropdownListDemoComponent } from './dropdown-list-demo.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownListModule,
    HttpModule
  ],
  declarations: [DropdownListDemoComponent],
  exports: [DropdownListDemoComponent]
})
export class DropdownListDemoModule { }
