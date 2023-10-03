import { TestBed } from '@angular/core/testing';

import { PackageSouscriptionService } from './package-souscription.service';

describe('PackageSouscriptionService', () => {
  let service: PackageSouscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageSouscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
