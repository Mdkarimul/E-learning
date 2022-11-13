import { TestBed } from '@angular/core/testing';

import { NavcontrolService } from './navcontrol.service';

describe('NavcontrolService', () => {
  let service: NavcontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavcontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
