import { RouterModule } from '@angular/router';
import { PropertyService } from './../../../data-services/property-services/property.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  villas: any;

  constructor(public propertyService: PropertyService, public activeRoute: RouterModule) { }

  ngOnInit() {
    this.villas = this.propertyService.propertObjects;
    console.log(this.villas);
  }

}
