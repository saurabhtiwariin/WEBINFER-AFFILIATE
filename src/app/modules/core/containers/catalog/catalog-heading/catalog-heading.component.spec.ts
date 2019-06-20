import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogHeadingComponent } from './catalog-heading.component';

describe('CatalogHeadingComponent', () => {
  let component: CatalogHeadingComponent;
  let fixture: ComponentFixture<CatalogHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
