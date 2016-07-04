/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { IpinfoService } from './ipinfo.service';

describe('Ipinfo Service', () => {
  beforeEachProviders(() => [IpinfoService]);

  it('should ...',
      inject([IpinfoService], (service: IpinfoService) => {
    expect(service).toBeTruthy();
  }));
});
