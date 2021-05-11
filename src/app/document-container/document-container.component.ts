import { Component, OnInit } from '@angular/core';
import { PatientDocumentsService } from '../documents-api.service';
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

  constructor(private store: PatientDocumentsService) {}
  ngOnInit(): void {
    this.store.get(1).subscribe({
      next: data => {
        this.documents = data;
      },
      error: e => {
        console.log(e);
      }
    });
  }
}
