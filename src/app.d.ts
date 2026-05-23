/// <reference types="@sveltejs/enhanced-img/types" />

import type { AboutData } from "$lib/data/about";
import type { Project } from "../../interfaces/project";

declare global {
  namespace App {
    interface LayoutData {
      isAnalyticsEnabled: boolean;
    }

    interface PageData extends Partial<AboutData> {
      title?: string;
      description?: string;
      age?: string;
      projects?: Project[];
    }
  }
}

export {};
