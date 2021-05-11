import { AfterViewInit, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PatientDocument } from '../interfaces/patient-document';
import { PreviewDialogComponent } from '../preview-dialog/preview-dialog.component';

import { TelemetryService } from '../telemetry.service';

@Component({
  selector: 'document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements AfterViewInit {
  @Input() documents: PatientDocument[];

  constructor(
    private telemetry: TelemetryService,private dialog: MatDialog) { }

  ngAfterViewInit(): void {
    this.telemetry.logMetric('avg:documents', this.documents?.length);
  }

  typeCollapsed(type: string): void {
    this.telemetry.logEvent('list:collapse', { type });
  }

  typeExpanded(type: string): void {
    this.telemetry.logEvent('list:expand', { type });
  }

  onDocumentClick(doc: PatientDocument): void {

 const dialogRef = this.dialog.open(PreviewDialogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });

    this.telemetry.logEvent('patient:document:click', { doc });

  }
}
