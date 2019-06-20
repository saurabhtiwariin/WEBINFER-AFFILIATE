import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRelateditemsComponent } from './product-relateditems.component';

describe('ProductRelateditemsComponent', () => {
  let component: ProductRelateditemsComponent;
  let fixture: ComponentFixture<ProductRelateditemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRelateditemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRelateditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
