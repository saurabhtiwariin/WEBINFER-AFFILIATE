import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsRightsidebarComponent } from './news-rightsidebar.component';

describe('NewsRightsidebarComponent', () => {
  let component: NewsRightsidebarComponent;
  let fixture: ComponentFixture<NewsRightsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsRightsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsRightsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
