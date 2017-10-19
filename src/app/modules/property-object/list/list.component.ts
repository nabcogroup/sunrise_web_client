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

  constructor(private propertyService: PropertyService, public activeRoute: RouterModule) { }

  ngOnInit() {
    this.propertyService.getPropertyObjects(this.properties);
  }

}
