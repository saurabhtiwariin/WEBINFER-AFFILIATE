import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLeftsidebarComponent } from './account-leftsidebar.component';

describe('AccountLeftsidebarComponent', () => {
  let component: AccountLeftsidebarComponent;
  let fixture: ComponentFixture<AccountLeftsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountLeftsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountLeftsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
