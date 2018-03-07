import { TestBed, inject } from '@angular/core/testing';

import { GvcMetricService } from './gvc-metric.service';

describe('GvcMetricService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GvcMetricService]
    });
  });

  it('should be created', inject([GvcMetricService], (service: GvcMetricService) => {
    expect(service).toBeTruthy();
  }));
});
