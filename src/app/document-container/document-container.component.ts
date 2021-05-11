import { Component, OnInit } from '@angular/core';
import { PatientDocumentsService } from '../documents-service/documents-api.service';
import { PatientDocument } from '../interfaces/patient-document';

/**
 * @title List with expandable panels for each file type
 */
@Component({
  styleUrls: ['document-container.component.scss'],
  selector: 'summary-document-container',
  templateUrl: 'document-container.component.html'
})
export class DocumentContainerComponent implements OnInit {
  results$: any;
  log: any;
  documents: PatientDocument[];

  constructor(private service: PatientDocumentsService) {}
  ngOnInit(): void {
    this.service;
  }
}
