import { Component, Output,DoCheck, OnInit, EventEmitter, Input } from '@angular/core';

import { Variable } from './models';
import { CompiledData } from './models';
import { RegRule } from './models';

@Component({
  selector: 'cmuh-format-textarea',
  templateUrl: './format-textarea.component.html',
  styleUrls: ['./format-textarea.component.css']
})
export class FormatTextAreaComponent implements OnInit,DoCheck {

  @Output() updateResult: EventEmitter<CompiledData>;
  @Input() rawData: string;

  private sampleString: string = `Declare the customized variable name in [] and define the variable value with in,
like [variableName](variableValue)`;

  private regRule: RegRule = new RegRule();
  private compiledData: CompiledData = new CompiledData();
  private variables: Variable[] = [];
  private result: string;

  constructor() {

    this.updateResult = new EventEmitter<CompiledData>();
  }
  ngDoCheck(){
    this.compile();
  }
  /**
   * ng 初始化(RegExp定義及第一次的compile)
   */
  ngOnInit() {

    this.regRule.variable = "\\[([a-zA-Z0-9]+)\\]";
    this.regRule.constant = "\\(([a-zA-Z0-9 ]*)\\)";
    this.rawData = this.rawData ? this.rawData : this.sampleString;
    this.compile();//first compile
  }
  /**
   * 編譯原始資料
   * @return {void}
   */
  compile(): void {

    this.variables = [];
    this.result = this.rawData;
    let regExpGlobal = new RegExp(`${this.regRule.variable}${this.regRule.constant}`, 'g');
    let matchedPatternGlobal = this.rawData.match(regExpGlobal);

    if (matchedPatternGlobal != null) {

      let regExpLocal = new RegExp(`${this.regRule.variable}${this.regRule.constant}`);

      for (let i = 0; i < matchedPatternGlobal.length; i++) {
        let name = matchedPatternGlobal[i].match(regExpLocal)[1];
        let value = matchedPatternGlobal[i].match(regExpLocal)[2];
        this.variables.push({ name: name, value: value });
      }

      for (var i = 0; i < this.variables.length; i++) {

        this.result = this.result.replace(RegExp(`\\[${this.variables[i].name}\\]${this.regRule.constant}`), `${this.variables[i].value}`);
      }
    }

    this.compiledData.result = this.result;
    this.compiledData.rawData = this.rawData;
    this.compiledData.variables = this.variables;
    this.updateResult.emit(this.compiledData);
  }
}
