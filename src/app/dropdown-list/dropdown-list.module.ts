import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownListComponent } from './dropdown-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DropdownListComponent],
  exports: [DropdownListComponent]
})
export class DropdownListModule { }
