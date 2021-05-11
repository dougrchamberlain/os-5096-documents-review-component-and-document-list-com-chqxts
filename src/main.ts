import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentMaterialModule } from './app/material-module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GroupByPipe } from './app/groupby.pipe';
import { PreviewDialogComponent } from './app/preview-dialog/preview-dialog.component';
import { DocumentReviewComponent } from './app/document-review/document-review.component';
import { DocumentContainerComponent } from './app/document-container/document-container.component';
import { DocumentListComponent } from './app/document-list/document-list.component';
import { TelemetryService } from './app/telemetry.service';
// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DocumentMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    NgxDocViewerModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DocumentContainerComponent,
    DocumentListComponent,
    DocumentReviewComponent,
    GroupByPipe,
    PreviewDialogComponent
  ],
  entryComponents: [DocumentContainerComponent, PreviewDialogComponent],
  bootstrap: [DocumentContainerComponent],
  providers: [
    TelemetryService,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' }
    }
  ]
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
