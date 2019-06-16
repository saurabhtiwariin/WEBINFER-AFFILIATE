import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowItemsComponent } from './slideshow-items.component';

describe('SlideshowItemsComponent', () => {
  let component: SlideshowItemsComponent;
  let fixture: ComponentFixture<SlideshowItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideshowItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
