import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkPanelDemoComponent } from "./bookmark-panel-demo.component";

import { AModule } from "./a/a.module";
import { AComponent } from "./a/a.component";

import { BookmarkPanelModule } from "../bookmark-panel.module";
import { ShareService } from "./a/share";
@NgModule({
    imports: [
        CommonModule,
        BookmarkPanelModule,
        AModule
    ],
    declarations: [BookmarkPanelDemoComponent],
    exports: [BookmarkPanelDemoComponent],
    entryComponents: [AComponent],
    providers: [ShareService]
})
export class BookmarkPanelDemoModule { }
