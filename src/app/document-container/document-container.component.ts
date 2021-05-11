import { Component, OnInit } from '@angular/core';
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

  constructor() {}
  ngOnInit(): void {}
}
