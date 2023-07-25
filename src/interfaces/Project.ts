export interface Project {
  name: string;
  description: string;
  stack: string[];
  isClosed: boolean;
  emoji?: string;
  url?: string;
  github?: string;
}
