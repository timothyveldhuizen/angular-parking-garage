import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParkingGaragesComponent } from './parking-garages.component';

describe('ParkingGaragesComponent', () => {
  let component: ParkingGaragesComponent;
  let fixture: ComponentFixture<ParkingGaragesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingGaragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingGaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
