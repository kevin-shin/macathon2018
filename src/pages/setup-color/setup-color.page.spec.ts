import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupColorPage } from './setup-color.page';

describe('SetupColorPage', () => {
  let component: SetupColorPage;
  let fixture: ComponentFixture<SetupColorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupColorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupColorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
