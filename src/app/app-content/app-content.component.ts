import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.css']
})
export class AppContentComponent implements OnInit {
  private _title: string;

  constructor() {
    console.log(this._title);
  }

  ngOnInit() {
  }

  @Input()
  set title(title: string) {
    this._title = title;
  }

  get title(): string { return this._title; }

}
