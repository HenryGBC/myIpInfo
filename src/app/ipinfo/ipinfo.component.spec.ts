/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { IpinfoComponent } from './ipinfo.component';

describe('Component: Ipinfo', () => {
  it('should create an instance', () => {
    let component = new IpinfoComponent(window);
    expect(component).toBeTruthy();
  });
});
