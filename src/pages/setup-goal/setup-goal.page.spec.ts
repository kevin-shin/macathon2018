import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupGoalPage } from './setup-goal.page';

describe('SetupGoalPage', () => {
  let component: SetupGoalPage;
  let fixture: ComponentFixture<SetupGoalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupGoalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupGoalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
