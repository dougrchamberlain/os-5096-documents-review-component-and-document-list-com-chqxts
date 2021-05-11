import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupByPipe } from '../groupby.pipe';
import { DocumentMaterialModule } from '../material-module';
import { TelemetryService } from '../telemetry.service';
import { DocumentListComponent } from './document-list.component';

describe('DocumentListComponent', () => {
    let component: DocumentListComponent;
    let fixture: ComponentFixture<DocumentListComponent>;

    const mocks = {
        TelemetryService: {
            logMetric: () => { },
            logEvent: () => { }
        }
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
                    DocumentListComponent,
                    GroupByPipe
                ],
                providers: [
                    { provide: TelemetryService, useValue: mocks.TelemetryService }
                ],
                imports: [
                    DocumentMaterialModule
                ]
            })
                .compileComponents();
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(DocumentListComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
    }
});
