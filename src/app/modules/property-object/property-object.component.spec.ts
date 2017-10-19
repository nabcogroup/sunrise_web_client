import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyObjectComponent } from './property-object.component';

describe('PropertyObjectComponent', () => {
  let component: PropertyObjectComponent;
  let fixture: ComponentFixture<PropertyObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
