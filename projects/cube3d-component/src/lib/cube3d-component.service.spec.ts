import { TestBed } from '@angular/core/testing';

import { Cube3dComponentService } from './cube3d-component.service';

describe('Cube3dComponentService', () => {
  let service: Cube3dComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cube3dComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
