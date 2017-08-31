import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AComponent } from "./a.component";
import { FormsModule } from "@angular/forms";
@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [AComponent],
    exports: [AComponent]
})
export class AModule { }