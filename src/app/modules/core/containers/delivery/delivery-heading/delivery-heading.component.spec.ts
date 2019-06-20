import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryHeadingComponent } from './delivery-heading.component';

describe('DeliveryHeadingComponent', () => {
  let component: DeliveryHeadingComponent;
  let fixture: ComponentFixture<DeliveryHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
