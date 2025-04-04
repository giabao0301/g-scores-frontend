import { Result } from "./result";

export interface Student {
  registrationNumber: string;
  foreignLanguageCode: string;
  results: Result[];
}

export interface TopStudent {
  student: Student;
  totalScore: number;
}
