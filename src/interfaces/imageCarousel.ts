import type { Picture } from "@sveltejs/enhanced-img";

interface ImageCarousel {
  title: string;
  titlePosition: "left" | "right";
  description: string;
  image: Picture;
}

export type { ImageCarousel };
