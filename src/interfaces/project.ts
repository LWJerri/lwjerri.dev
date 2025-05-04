interface Project {
  name: string;
  description: string;
  stack: string[];
  isClosed: boolean;
  urls?: string[];
  github?: string;
}

export { type Project };
