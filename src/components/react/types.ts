
export interface Internship {
  role: string;
  company: string;
  duration: string;
  description: string[];
  logoUrl: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}
