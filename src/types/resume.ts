export type Locale = "pt" | "en";

export interface ResumeData {
  firstName: string;
  lastName: string;
  profilePicture: string;
  summary: string;
  headline: string;
  multiLocaleHeadline: { pt: string };
  educations: { schoolName: string; degree?: string; fieldOfStudy: string }[];
  certifications: { name: string; authority: string }[];
  fullPositions: {
    companyName: string;
    title: string;
    period?: string;
    description: string;
  }[];
  projects: { items: { title: string; description: string }[] };
}

export type ProfileResponse = ResumeData;
