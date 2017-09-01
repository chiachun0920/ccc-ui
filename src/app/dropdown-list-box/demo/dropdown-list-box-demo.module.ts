import { NgModule } from '@angular/core';

import { DropdownListBoxDemoComponent } from "./dropdown-list-box-demo.component";
import { DropdownListBoxModule } from "../dropdown-list-box.module";
@NgModule({
    imports: [DropdownListBoxModule],
    declarations: [DropdownListBoxDemoComponent],
    exports: [DropdownListBoxDemoComponent]
})
export class DropdownListBoxDemoModule { }