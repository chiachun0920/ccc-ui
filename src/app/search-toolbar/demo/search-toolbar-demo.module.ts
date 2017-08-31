import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchToolbarDemoComponent } from './search-toolbar-demo.component';
import { SearchToolbarModule } from '../';
@NgModule({
    imports: [CommonModule, SearchToolbarModule],
    exports: [SearchToolbarDemoComponent],
    declarations: [SearchToolbarDemoComponent],
    providers: [],
})
export class SearchToolbarDemoModule { }
