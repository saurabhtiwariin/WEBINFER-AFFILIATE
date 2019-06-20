import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLeftsidebarComponent } from './category-leftsidebar.component';

describe('CategoryLeftsidebarComponent', () => {
  let component: CategoryLeftsidebarComponent;
  let fixture: ComponentFixture<CategoryLeftsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryLeftsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryLeftsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
