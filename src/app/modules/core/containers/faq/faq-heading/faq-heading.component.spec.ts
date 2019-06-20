import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqHeadingComponent } from './faq-heading.component';

describe('FaqHeadingComponent', () => {
  let component: FaqHeadingComponent;
  let fixture: ComponentFixture<FaqHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
