import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { DockModule } from "./dock";

import { AutoCompleteDemoModule } from './auto-complete/demo';
import { BookmarkPanelDemoModule } from "./bookmark-panel/demo";
import { DropdownListDemoModule } from './dropdown-list/demo';
import { DockDemoModule } from './dock/demo';
import { DropdownListBoxDemoModule } from "./dropdown-list-box/demo";
import { FormatTextAreaDemoModule } from './format-textarea/demo';
import { HomeComponent } from './home.component';
import { ItemBoxDemoModule } from './item-box/demo';
import { PanelBarDemoModule } from "./panel-bar/demo";
import { ToolbarDemoModule } from './search-toolbar/toolbar/demo';
import { SearchToolbarDemoModule } from './search-toolbar/demo';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BookmarkPanelDemoModule,
    DockModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    ItemBoxDemoModule,
    AutoCompleteDemoModule,
    FormatTextAreaDemoModule,
    DropdownListDemoModule,
    ToolbarDemoModule,
    SearchToolbarDemoModule,
    DockDemoModule,
    PanelBarDemoModule,
    DropdownListBoxDemoModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
