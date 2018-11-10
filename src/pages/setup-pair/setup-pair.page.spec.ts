import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPairPage } from './setup-pair.page';

describe('SetupPairPage', () => {
  let component: SetupPairPage;
  let fixture: ComponentFixture<SetupPairPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupPairPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupPairPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
