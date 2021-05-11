import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PatientDocumentsService } from './documents-api.service';

describe('PatientDocumentsService', () => {
  let service: PatientDocumentsService;
  let httpClient: HttpClient;
  let httpClientMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PatientDocumentsService);
    httpClient = TestBed.inject(HttpClient);
    httpClientMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
