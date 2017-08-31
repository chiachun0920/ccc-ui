import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatTextAreaComponent } from './format-textarea.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [FormatTextAreaComponent],
  exports: [FormatTextAreaComponent]
})
export class FormatTextAreaModule { }
