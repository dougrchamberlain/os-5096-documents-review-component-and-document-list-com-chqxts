import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientDocument } from '../interfaces/patient-document';
import { DocumentMaterialModule } from '../material-module';
import { DocumentReviewComponent } from './document-review.component';

describe('DocumentReviewComponent', () => {
    let component: DocumentReviewComponent;
    let fixture: ComponentFixture<DocumentReviewComponent>;

    const mocks = {
        dialog: {}
    };
    let testDoc: PatientDocument;


    describe('On Initialization', () => {
        testDoc = {
            description: '',
            subtype: '',
            type: ''
        };
        setup();
        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });

    function setup(): void {
        beforeEach(async () => {
            await TestBed.configureTestingModule({
                declarations: [
                    DocumentReviewComponent
                ],
                imports: [
                    DocumentMaterialModule
                ]
            })
                .compileComponents();
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(DocumentReviewComponent);
            component = fixture.componentInstance;
            component.doc = testDoc;
            fixture.detectChanges();
        });
    }
});
