import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public title: string;

  public appIcon = [
    { imgIcon: 'https://maxcdn.icons8.com/Share/icon/color/Gaming//bullbasaur1600.png', title: 'Panel-Bar', path: 'panel-bar' },
    { imgIcon: 'https://maxcdn.icons8.com/Share/icon/color/Gaming//dratini1600.png', title: 'Dock', path: 'dock' },
    { imgIcon: 'https://maxcdn.icons8.com/Share/icon/color/Gaming//charmander1600.png', title: 'Bookmark-Panel', path: 'bookmark-panel' },
    { imgIcon: 'https://maxcdn.icons8.com/Share/icon/color/Gaming//squirtle1600.png', title: 'Bookmark-Panel', path: 'bookmark-panel' },
    { imgIcon: 'https://maxcdn.icons8.com/Share/icon/color/Gaming//snorlax1600.png', title: 'Bookmark-Panel', path: 'bookmark-panel' },
    { imgIcon: 'https://maxcdn.icons8.com/Share/icon/color/Gaming//eevee1600.png', title: 'Bookmark-Panel', path: 'bookmark-panel' },
    { imgIcon: 'https://maxcdn.icons8.com/Share/icon/color/Gaming//zubat1600.png', title: 'Bookmark-Panel', path: 'bookmark-panel' },
    { imgIcon: 'https://maxcdn.icons8.com/Share/icon/color/Gaming//psyduck1600.png', title: 'Bookmark-Panel', path: 'bookmark-panel' },
    { imgIcon: 'https://maxcdn.icons8.com/Share/icon/color/Gaming//mankey1600.png', title: 'Bookmark-Panel', path: 'bookmark-panel' },
    { imgIcon: 'https://maxcdn.icons8.com/Share/icon/color/Gaming//weedle1600.png', title: 'Bookmark-Panel', path: 'bookmark-panel' },
    { imgIcon: 'https://maxcdn.icons8.com/Share/icon/color/Gaming//pidgey1600.png', title: 'Bookmark-Panel', path: 'bookmark-panel' },
    { imgIcon: 'https://maxcdn.icons8.com/Share/icon/color/Gaming//venonat1600.png', title: 'Bookmark-Panel', path: 'bookmark-panel' }
  ];
  constructor(private router: Router) { }
  ngOnInit() {

    this.title = "Demos";
  }
  public onClick(event) {

    this.navigate(event);

  }
  navigate(icon) {

    this.router.navigate([`/${icon.path}`]);
  }

}