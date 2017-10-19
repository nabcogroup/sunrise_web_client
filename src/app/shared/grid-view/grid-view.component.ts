import { ColumnModel } from './column-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  @Input('columns')
  columns: Array<ColumnModel>;

  @Input('data')
  data = [];

  constructor() { }

  ngOnInit() {
  }

}
