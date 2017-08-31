import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchToolbarComponent } from './search-toolbar.component';
import { ToolbarModule } from './toolbar';
@NgModule({
    imports: [CommonModule,ToolbarModule],
    exports: [SearchToolbarComponent],
    declarations: [SearchToolbarComponent],
    providers: [],
})
export class SearchToolbarModule { }
