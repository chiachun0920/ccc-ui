import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'auto-complete-demo.component.html'
})

export class AutoCompleteDemoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    private result:string;
    private height = "120px";
    private suggestion: string[] = [
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Aruba',
        'Australia',
        'Austria',
        'Azerbaijan',
        'Bahamas, The',
        'Bahrain',
        'Bangladesh',
        'Barbados',
        'Belarus',
        'Belgium',
        'Belize',
        'Benin',
        'Bhutan',
        'Bolivia',
        'Bosnia and Herzegovina',
        'Botswana',
        'Brazil',
        'Brunei',
        'Bulgaria',
        'Burkina Faso',
        'Burma',
        'Burundi'
    ];
    private onUpdateResult(result: string): void {
        /*　do something ...*/
        this.result = result;
    }
}