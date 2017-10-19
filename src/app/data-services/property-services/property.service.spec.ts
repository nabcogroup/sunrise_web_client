import { TestBed, inject } from '@angular/core/testing';

import { PropertyService } from './property-service.service';

describe('PropertyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyService]
    });
  });

  it('should be created', inject([PropertyService], (service: PropertyService) => {
    expect(service).toBeTruthy();
  }));
});
