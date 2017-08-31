import { Input, Component, OnInit, ViewChild, ComponentFactoryResolver, Type } from '@angular/core';

import { LeftPanelHostDirective } from "./left-panel-host.directive";
import { RightPanelHostDirective } from "./right-panel-host.directive";

import { PanelBarTab } from "./model";

const smallPanelSize: number = 4;
const mediumPanelSize: number = 8;
const largePanelSize: number = 12;
const closePanelSize: number = 0;

@Component({
  selector: 'ccc-panel-bar',
  templateUrl: './bookmark-panel.component.html',
  styleUrls: ['./bookmark-panel.component.scss']
})
export class BookmarkPanelComponent implements OnInit {

  @Input() lTabs: PanelBarTab[];
  @Input() rTabs: PanelBarTab[];

  @ViewChild(LeftPanelHostDirective) leftPanelHost: LeftPanelHostDirective;
  @ViewChild(RightPanelHostDirective) rightPanelHost: RightPanelHostDirective;

  private currentTab: PanelBarTab;

  private leftPanelWidth: number = closePanelSize;
  private rightPanelWidth: number = closePanelSize;
  private contentWidth: number = largePanelSize;

  private isLeftPanelExpand = false;
  private isRightPanelExpand = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {

    this.leftPanelWidth = closePanelSize;
    this.rightPanelWidth = closePanelSize;
    this.contentWidth = largePanelSize;

    this.isLeftPanelExpand = false;
    this.isRightPanelExpand = false;
  }
  /**
   * 點擊左側tab事件處理
   * @param {Tab} tab 
   */
  private onLeftTabClick(tab: PanelBarTab) {

    this.currentTab = tab;

    this.openLeftPanel();

    this.loadLeftPanelComponent(this.currentTab.component);
  }
  /**
   * 點擊右側tab事件處理
   * @param {Tab} tab 
   */
  private onRightTabClick(tab: PanelBarTab) {

    this.currentTab = tab;

    this.openRightPanel();

    this.loadRightPanelComponent(this.currentTab.component);
  }
  /**
   * 點擊展開左側面板事件處理
   */
  private onExpandLeftPanelClick() {

    this.expandLeftPanel();
  }
  /**
   * 點擊縮小左側面板事件處理
   */
  private onAbridgeLeftPanelClick() {

    this.abridgeLeftPanel();
  }
  /**
   * 點擊縮小右側面板事件處理
   */
  private onAbridgeRightPanelClick() {

    this.abridgeRightPanel();
  }
  /**
   * 點擊展開右側面板事件處理
   */
  private onExpandRightPanelClick() {

    this.expandRightPanel();
  }
  /**
   * 點擊關閉兩側面板事件處理
   */
  private onClosePanelClick() {

    this.closePanel();
  }

  /**
   * 打開左側面板
   */
  public openLeftPanel() {

    this.isLeftPanelExpand = false;
    this.leftPanelWidth = smallPanelSize;
    this.contentWidth = mediumPanelSize;
    this.rightPanelWidth = closePanelSize;
  }
  /**
   * 展開左側面板
   */
  public expandLeftPanel() {

    this.isLeftPanelExpand = true;
    this.leftPanelWidth = mediumPanelSize;
    this.contentWidth = smallPanelSize;
    this.rightPanelWidth = closePanelSize;
  }
  /**
   * 縮小左邊面板
   */
  public abridgeLeftPanel() {

    this.isLeftPanelExpand = false;
    this.leftPanelWidth = smallPanelSize;
    this.contentWidth = mediumPanelSize;
    this.rightPanelWidth = closePanelSize;
  }
  /**
   * 打開右側面板
   */
  public openRightPanel() {

    this.isRightPanelExpand = false;
    this.leftPanelWidth = closePanelSize;
    this.contentWidth = mediumPanelSize;
    this.rightPanelWidth = smallPanelSize;
  }
  /**
   * 展開右側面板
   */
  public expandRightPanel() {

    this.isRightPanelExpand = true;
    this.rightPanelWidth = mediumPanelSize;
    this.contentWidth = smallPanelSize;
    this.leftPanelWidth = closePanelSize;
  }
  /**
   * 縮小右邊面板
   */
  public abridgeRightPanel() {

    this.isRightPanelExpand = false;
    this.leftPanelWidth = closePanelSize;
    this.contentWidth = mediumPanelSize;
    this.rightPanelWidth = smallPanelSize;
  }
  /**
   * 關閉兩側面板
   */
  public closePanel() {

    this.isRightPanelExpand = false;
    this.isLeftPanelExpand = false;
    this.rightPanelWidth = closePanelSize;
    this.contentWidth = largePanelSize;
    this.leftPanelWidth = closePanelSize;
  }
  /**
   * 載入左邊面板的component
   * @param {Type<any>} comp
   */
  private loadLeftPanelComponent(comp: Type<any>) {

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp);

    let viewContainerRef = this.leftPanelHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
  }
  /**
   * 載入右邊面板的component
   * @param {Type<any>} comp
   */
  private loadRightPanelComponent(comp: Type<any>) {

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp);

    let viewContainerRef = this.rightPanelHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
  }
}