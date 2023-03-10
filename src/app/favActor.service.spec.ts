import { TestBed } from '@angular/core/testing';

import { favActorService } from './favActor.service';

describe('favActorService', () => {
  let service: favActorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(favActorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});