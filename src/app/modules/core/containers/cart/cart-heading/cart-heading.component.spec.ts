import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartHeadingComponent } from './cart-heading.component';

describe('CartHeadingComponent', () => {
  let component: CartHeadingComponent;
  let fixture: ComponentFixture<CartHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
