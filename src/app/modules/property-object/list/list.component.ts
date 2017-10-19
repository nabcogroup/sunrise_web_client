import { ColumnModel } from './../../../shared/grid-view/column-model';
import { GridViewComponent } from './../../../shared/grid-view/grid-view.component';
import { Properties } from './../models/properties';
import { PropertyService } from './../service/property.service';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  properties: Properties = new Properties();
  grid: Array<ColumnModel>;

  constructor(private propertyService: PropertyService, public activeRoute: RouterModule) { 
    this.grid = [ new ColumnModel('villa_no', 'Villa No')];
  }

  ngOnInit() {
    this.propertyService.getPropertyObjects(this.properties);
  }

}
