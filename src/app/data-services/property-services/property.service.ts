import { Injectable } from '@angular/core';

@Injectable()
export class PropertyService {

  propertObjects: any = [];

  constructor() {
    this.propertObjects.push({
      'villa_no': 'S1-V01',
      'location': 'SUNRISE RESIDENCE 1',
      'electricity_no': '1038886',
      'water_no': '955890',
      'qtel_no': '1',
      'class_name': 'Full Furnished',
      'rate': '12,600',
      'status': 'Occupied',
      
    });
  }

}
