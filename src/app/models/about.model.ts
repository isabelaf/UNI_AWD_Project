export class AboutWorkExperience {
  role: string;
  companyName: string;
  startPeriod: Date;
  endPeriod?: Date;
  city: string;
  country: string;
}

export class AboutEducation {
  degree: string;
  institutionName: string;
  startYear: number;
  endYear?: number;
  city: string;
  country: string;
}

export class About {
  workExperience: AboutWorkExperience[];
  education: AboutEducation[];
  programmingBackground: string;
}