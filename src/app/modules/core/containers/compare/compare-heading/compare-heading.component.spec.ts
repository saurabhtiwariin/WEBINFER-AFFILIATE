import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareHeadingComponent } from './compare-heading.component';

describe('CompareHeadingComponent', () => {
  let component: CompareHeadingComponent;
  let fixture: ComponentFixture<CompareHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
