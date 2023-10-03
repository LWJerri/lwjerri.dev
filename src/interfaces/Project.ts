export interface Project {
  name: string;
  description: string;
  stack: string[];
  isArchived: boolean;
  emoji?: string;
  url?: string;
  github?: string;
}
