export class SubjectResource {
  name: string;
  src: string;
}

export class SubjectMaterial {
  name: string;
  src: string;
  resources?: SubjectResource[];
}

export class SubjectExamTime {
  name: string;
  startTime: Date;
  endTime: Date;
}

export class SubjectExam {
  date: Date;
  groups: string[];
  times: SubjectExamTime[];
}

export class Subject {
  name: string;
  specializations: string[];
  year: string;
  semester: string;
  lectHours: number;
  semHours: number;
  labHours: number;
  requirements: string[];
  grading: string;
  lectures: SubjectMaterial[];
  seminars: SubjectMaterial[];
  laboratories: SubjectMaterial[];
  exams: SubjectExam[];
}
