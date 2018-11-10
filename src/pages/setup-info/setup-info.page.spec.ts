import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupInfoPage } from './setup-info.page';

describe('SetupInfoPage', () => {
  let component: SetupInfoPage;
  let fixture: ComponentFixture<SetupInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
