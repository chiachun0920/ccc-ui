import { AutoCompleteDemoComponent } from './auto-complete/demo';
import { BookmarkPanelDemoComponent } from "./bookmark-panel/demo";
import { DropdownListDemoComponent } from './dropdown-list/demo';
import { FormatTextAreaDemoComponent } from './format-textarea/demo';
import { HomeComponent } from './home.component';
import { ItemBoxDemoComponent } from './item-box/demo';
import { Routes } from '@angular/router';
import { ToolbarDemoComponent } from './search-toolbar/toolbar/demo';
import { SearchToolbarDemoComponent } from './search-toolbar/demo';
import { DockDemoComponent } from './dock/demo';
import { PanelBarDemoComponent } from "./panel-bar/demo";
import { DropdownListBoxDemoComponent } from "./dropdown-list-box/demo";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bookmark-panel', component: BookmarkPanelDemoComponent },
    { path: 'item-box', component: ItemBoxDemoComponent },
    { path: 'auto-complete', component: AutoCompleteDemoComponent },
    { path: 'format-textarea', component: FormatTextAreaDemoComponent },
    { path: 'dropdown-list', component: DropdownListDemoComponent },
    { path: 'toolbar', component: ToolbarDemoComponent },
    { path: 'search-toolbar', component: SearchToolbarDemoComponent },
    { path: 'dock', component: DockDemoComponent },
    { path: 'panel-bar', component: PanelBarDemoComponent },
    { path: 'dropdown-list-box', component: DropdownListBoxDemoComponent }
];
