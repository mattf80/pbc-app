
export interface Exam {
    id: number;
    name: string;
    examComponents: ExamComponent[]
}

export interface ExamComponent {
    id: number;
    name: string;
}