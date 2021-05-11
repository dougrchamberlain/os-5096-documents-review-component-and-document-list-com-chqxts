import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { Observable, of } from 'rxjs/dist/types';
import { PatientDocument } from '../interfaces/patient-document';

/**
 * @title DocumentsService
 * @Description provides a means to access documents from our API
 * does not require intimate understanding of the transforms, stores, or http calls
 *
 */
@Injectable()
export class PatientDocumentsService extends ObservableStore<StoreState> {
  documentApiPath: string = 'https://ennpxdfurcc291d.m.pipedream.net';
  constructor(private client: HttpClient) {
    super({ trackStateHistory: true });
    const initialState: StoreState = {
      documents: null,
      document: null
    };

    this.setState(initialState, 'INIT_STATE');
  }

  get(id: any): Observable<PatientDocument[]> {
    const { documents } = this.getState();
    if (documents) {
      return of(documents);
    }
    // call server and get data
    // assume async call here that returns observable
    // here's where we will call the transform service.

    let observable$ = this.client.post<PatientDocument[]>(
      this.documentApiPath,
      {},
      { params: { id } }
    );

    observable$.subscribe({
      next: (data: any) => {
        debugger;
        let {
          items: [, { name: second_name }]
        } = data;
        console.log(second_name);

        this.setState(
          { documents: data.PracticeFileTypeModels },
          StoreActions.GetDocuments
        );
      },
      error: (e: any) => {
        console.log(e);
      }
    });

    return observable$;
  }
}
export interface StoreState {
  documents: PatientDocument[] | null;
  document: PatientDocument | null;
}

export enum StoreActions {
  AddDocument = 'ADD_DOCUMENTS',
  RemoveDocument = 'REMOVE_DOCUMENTS',
  GetDocuments = 'GET_DOCUMENTS',
  SortDocuments = 'SORT_DOCUMENTS'
}
