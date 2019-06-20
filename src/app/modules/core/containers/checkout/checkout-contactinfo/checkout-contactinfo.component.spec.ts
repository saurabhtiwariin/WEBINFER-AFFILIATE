import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutContactinfoComponent } from './checkout-contactinfo.component';

describe('CheckoutContactinfoComponent', () => {
  let component: CheckoutContactinfoComponent;
  let fixture: ComponentFixture<CheckoutContactinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutContactinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutContactinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
