import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryLeftsidebarComponent } from './subcategory-leftsidebar.component';

describe('SubcategoryLeftsidebarComponent', () => {
  let component: SubcategoryLeftsidebarComponent;
  let fixture: ComponentFixture<SubcategoryLeftsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryLeftsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryLeftsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
