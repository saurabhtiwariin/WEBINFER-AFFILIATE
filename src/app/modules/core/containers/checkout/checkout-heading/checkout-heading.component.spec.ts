import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutHeadingComponent } from './checkout-heading.component';

describe('CheckoutHeadingComponent', () => {
  let component: CheckoutHeadingComponent;
  let fixture: ComponentFixture<CheckoutHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
