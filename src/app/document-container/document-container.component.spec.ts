import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { DocumentMaterialModule } from '../material-module';
import { DocumentContainerComponent } from './document-container.component';

describe('DocumentContainerComponent', () => {
  let component: DocumentContainerComponent;
  let fixture: ComponentFixture<DocumentContainerComponent>;

  const mocks = {
    dialog: {}
  };

  describe('On Initialization', () => {
    setup();
    it('should create', () => {
      expect(component).toBeTruthy();
    });

  });

  function setup(): void {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [
          DocumentContainerComponent
        ],
        providers: [
          { provide: MatDialog, useValue: mocks.dialog }
        ],
        imports: [
          DocumentMaterialModule,
          HttpClientTestingModule
        ]
      })
        .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(DocumentContainerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }
});
