import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutRightsidebarComponent } from './checkout-rightsidebar.component';

describe('CheckoutRightsidebarComponent', () => {
  let component: CheckoutRightsidebarComponent;
  let fixture: ComponentFixture<CheckoutRightsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutRightsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutRightsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
