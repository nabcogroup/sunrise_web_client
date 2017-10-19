import { Properties } from './../models/properties';
import { ApiService } from './../../../shared/server/api.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PropertyService {

  constructor(private apiService: ApiService) { }

  getPropertyObjects(properties: Properties) {
    return this.apiService.getApi('api_villa/list').subscribe(result => properties.villas = result.villas.data);
  }

}
