import { Exam, ExamComponent } from './exam';

export interface PbVersion {
    id: number;
    exam: Exam;
    examComponent: ExamComponent;
    versionName: string;
    isCurrent: boolean;
    dateAdded: string;
    dateRetired?: string;
}