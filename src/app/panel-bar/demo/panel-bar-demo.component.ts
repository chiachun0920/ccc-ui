import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'panel-bar-demo.component.html'
})
export class PanelBarDemoComponent implements OnInit {

    myTitle = 'panel-bar'
    items;
    lCurlyB = '{';
    rCurlyB = '}';
    constructor() { }

    ngOnInit() {

        this.items = [
            {
                title: 'Documents', color: '#DDDDDD', child: [
                    {
                        title: 'Work', color: '#FFE599', child: [
                            { title: 'Expenses.doc' },
                            { title: 'Resume.doc' }
                        ]
                    },
                    {
                        title: 'Home', color: '#FFE599', child: [
                            { title: 'Invoices.txt' }
                        ]
                    },

                ]
            },
            {
                title: 'Pictures', color: '#DDDDDD', child: [
                    {
                        title: 'barcelona.jpg'
                    },
                    {
                        title: 'logo.jpg'
                    },
                    {
                        title: 'dog.jpg'
                    },
                ]
            },
            {
                title: 'Movies', color: '#DDDDDD', child: [
                    {
                        title: 'Al Pacino', color: '#FFE599', child: [
                            { title: 'Scarface.mp4' },
                            { title: 'Serpico.avi' }
                        ]
                    },
                    {
                        title: 'Robert De Niro', color: '#FFE599', child: [
                            { title: 'Goodfellas' },
                            { title: 'Untouchables' }
                        ]
                    },

                ]
            },
        ]
    }

    onSelect(event) {
        console.log(event);
    }

    myAlert() {
        alert(this.myTitle + '!!!');
    }


}