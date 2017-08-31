import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { AnimationTransitionEvent, trigger, state, style, transition, animate } from '@angular/core';

import { CircleNumber, Icon } from './model';

@Component({
    selector: 'ccc-dock',
    templateUrl: 'dock.component.html',
    styleUrls: ['dock.component.scss'],
    animations: [
        trigger('leftFadeOut', [
            state('inactive', style({
                transform: 'translateX(0)',
                opacity: '1.0'
            })),
            state('active', style({
                transform: 'translateX(-10%)',
                opacity: '0.0'
            })),
            transition('inactive => active', animate('200ms ease-in')),
        ]),
        trigger('leftFadeIn', [
            state('inactive', style({
                transform: 'translateX(10%)',
                opacity: '0.0'
            })),
            state('active', style({
                transform: 'translateX(0%)',
                opacity: '1.0'
            })),
            transition('inactive => active', animate('200ms ease-in')),
        ]),
        trigger('rightFadeOut', [
            state('inactive', style({
                transform: 'translateX(0)',
                opacity: '1.0'
            })),
            state('active', style({
                transform: 'translateX(15%)',
                opacity: '0.0'
            })),
            transition('inactive => active', animate('200ms ease-in')),
        ]),
        trigger('rightFadeIn', [
            state('inactive', style({
                transform: 'translateX(-15%)',
                opacity: '0.0'
            })),
            state('active', style({
                transform: 'translateX(0%)',
                opacity: '1.0'
            })),
            transition('inactive => active', animate('200ms ease-in')),
        ])
    ]
})
export class DockComponent implements OnInit {

    @Input() icon: Icon[];
    @Output() iconClick: EventEmitter<Icon>;

    public curIndexOfRow = 0;
    public gridItem: any[] = [];
    public defaultIconImg = defaultIconImg;
    public circleNumber: CircleNumber[] = [];
    /**
     * animation variable
     */
    public aniStateOfNext = 'inactive';
    public aniStateOfPre = 'inactive';
    /**
     * animation set
     */
    aniOfPreStart() {

        this.aniStateOfPre = 'active';
    }

    public aniOfNextStart() {

        this.aniStateOfNext = 'active';
    }
    aniOfPreDone(event: AnimationTransitionEvent) {

        if (event.fromState == 'inactive' && event.toState == 'active') {
            setTimeout(() => {
                this.aniStateOfPre = 'inactive';
                this.curIndexOfRow = this.circleNumber[this.curIndexOfRow].pre;
                // this.curIndexOfRow = this.curIndexOfRow - 1
            }, 100)

        }
    }
    aniOfNextDone(event: AnimationTransitionEvent) {

        if (event.fromState == 'inactive' && event.toState == 'active') {
            setTimeout(() => {
                this.aniStateOfNext = 'inactive';
                this.curIndexOfRow = this.circleNumber[this.curIndexOfRow].next;
            }, 100)

        }
    }
    /**
     * 建構函式
     */
    constructor() {

        this.icon = this.icon ? this.icon : [];
        this.iconClick = new EventEmitter<Icon>();
    }
    /**
     * ng 初始化
     */
    ngOnInit() {

        var count = -1;
        for (var i = 0; i < this.icon.length; i++) {
            if (i % 5 == 0) {
                count++;
                this.gridItem[count] = [];
                this.gridItem[count].push(this.icon[i]);
            }
            else {
                this.gridItem[count].push(this.icon[i]);
            }
        }

        for (var i = 0; i <= count; i++) {
            this.circleNumber[i] = new CircleNumber();
            if (i == 0) {
                this.circleNumber[i].num = i;
                this.circleNumber[i].next = count;
                this.circleNumber[i].pre = count;
            } else if (i == count) {
                this.circleNumber[i].num = i;
                this.circleNumber[i].pre = i - 1;
                this.circleNumber[i].next = 0
            } else {
                this.circleNumber[i].num = i;
                this.circleNumber[i].pre = i - 1;
                this.circleNumber[i].next = i + 1;
            }
        }
    }
    /**
     *  點選Icon
     *  @param {Icon} icon
     */
    private onClick(icon: Icon) {
        
        this.iconClick.emit(icon);
    }
    /**
     * 下一列
     */
    private next() {

        this.aniOfNextStart();
    }
    /**
     * 上一列
     */
    private back() {

        this.aniOfPreStart();
    }
}
var defaultIconImg: string = 'data:image/png;base64,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';