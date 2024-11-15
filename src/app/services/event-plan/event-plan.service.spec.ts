import { TestBed } from '@angular/core/testing';

import { EventPlanService } from './event-plan.service';

describe('EventPlanService', () => {
  let service: EventPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
