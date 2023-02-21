import { TestBed } from '@angular/core/testing';

import { OnlineOfflineService } from './offline-online.service';

describe('OfflineOnlineService', () => {
  let service: OnlineOfflineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineOfflineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
