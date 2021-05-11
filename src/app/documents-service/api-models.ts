export interface ApiPatientDocumentsModel {
    PracticeFileTypeModels
}

export interface ApiFileTypeModel {
    PracticeFileTypeId: number;
    Description: string;
    PatientFileModels: ApiPatientFileModel[];
}

export interface ApiPatientFileModel {
    PatientFileId: number;
    Description: string;
    FileTypeDescription: string;
    FileSubTypeDescription: string;
}