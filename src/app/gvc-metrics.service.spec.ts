import { TestBed, inject } from '@angular/core/testing';

import { GvcMetricsService } from './gvc-metrics.service';

describe('GvcMetricsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GvcMetricsService]
    });
  });

  it('should be created', inject([GvcMetricsService], (service: GvcMetricsService) => {
    expect(service).toBeTruthy();
  }));
});
