import { TestBed } from '@angular/core/testing';

import { LbuttonService } from './lbutton.service';

describe('LbuttonService', () => {
  let service: LbuttonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LbuttonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
