import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNewreviewComponent } from './product-newreview.component';

describe('ProductNewreviewComponent', () => {
  let component: ProductNewreviewComponent;
  let fixture: ComponentFixture<ProductNewreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductNewreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNewreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
