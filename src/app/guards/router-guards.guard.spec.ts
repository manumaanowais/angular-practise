import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routerGuardsGuard } from './router-guards.guard';

describe('routerGuardsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routerGuardsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
