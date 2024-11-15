import { TestBed } from '@angular/core/testing';

import { EventDateSlotsService } from './event-date-slots.service';

describe('EventDateSlotsService', () => {
  let service: EventDateSlotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventDateSlotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
