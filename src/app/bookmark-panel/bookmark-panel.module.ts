import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkPanelComponent } from './bookmark-panel.component';
import { LeftPanelHostDirective } from "./left-panel-host.directive";
import { RightPanelHostDirective } from "./right-panel-host.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BookmarkPanelComponent,
    LeftPanelHostDirective,
    RightPanelHostDirective
  ],
  exports: [BookmarkPanelComponent]
})
export class BookmarkPanelModule { }
