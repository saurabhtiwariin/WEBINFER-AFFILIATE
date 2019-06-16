import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCategoriesComponent } from './basic-categories.component';

describe('BasicCategoriesComponent', () => {
  let component: BasicCategoriesComponent;
  let fixture: ComponentFixture<BasicCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
