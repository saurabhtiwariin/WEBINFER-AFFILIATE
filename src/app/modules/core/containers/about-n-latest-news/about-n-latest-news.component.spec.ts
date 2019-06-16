import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNLatestNewsComponent } from './about-n-latest-news.component';

describe('AboutNLatestNewsComponent', () => {
  let component: AboutNLatestNewsComponent;
  let fixture: ComponentFixture<AboutNLatestNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutNLatestNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNLatestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
