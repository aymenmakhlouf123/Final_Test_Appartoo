/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AmisComponent } from './amis.component';

describe('AmisComponent', () => {
  let component: AmisComponent;
  let fixture: ComponentFixture<AmisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
