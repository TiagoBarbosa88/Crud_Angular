import { TestBed } from '@angular/core/testing';

import { ToogleThemeService } from './toogle-theme.service';

describe('ToogleThemeService', () => {
  let service: ToogleThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToogleThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
