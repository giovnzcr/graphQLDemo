import { TestBed } from '@angular/core/testing';

import { GraphExampleService } from './graph-example.service';

describe('GraphExampleService', () => {
  let service: GraphExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
