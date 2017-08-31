import { Component, OnInit } from '@angular/core';
import { FormatTextAreaComponent } from '../format-textarea.component';
import { CompiledData } from '../';
@Component({
    templateUrl: 'format-textarea-demo.component.html'
})
export class FormatTextAreaDemoComponent implements OnInit {

    public result: CompiledData;
    public rawData = `I am [name](jenny)\nI am [age](18) years old`;

    constructor() { }

    ngOnInit() { }

    onUpdateResult(result) {

        this.result = result;
    }

    replaceRawData(name, value) {

        this.rawData = this.result.rawData.replace(RegExp(`\\[${name}\\]\\([a-zA-Z0-9]*\\)`), `[${name}](${value})`);
    }

}