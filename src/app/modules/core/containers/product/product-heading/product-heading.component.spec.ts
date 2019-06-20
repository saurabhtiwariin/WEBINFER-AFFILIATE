import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHeadingComponent } from './product-heading.component';

describe('ProductHeadingComponent', () => {
  let component: ProductHeadingComponent;
  let fixture: ComponentFixture<ProductHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
