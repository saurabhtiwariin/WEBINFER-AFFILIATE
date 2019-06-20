import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryHeadingComponent } from './subcategory-heading.component';

describe('SubcategoryHeadingComponent', () => {
  let component: SubcategoryHeadingComponent;
  let fixture: ComponentFixture<SubcategoryHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
