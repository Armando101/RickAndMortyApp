import { TestBed } from '@angular/core/testing';

import { EpisodeGuardGuard } from './episode-guard.guard';

describe('EpisodeGuardGuard', () => {
  let guard: EpisodeGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EpisodeGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
