export interface Project {
  name: string;
  description: string;
  stack: string[];
  closed: boolean;
  emoji?: string;
  url?: string;
  github?: string;
}
