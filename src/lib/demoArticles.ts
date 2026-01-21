// src/lib/demoArticles.ts

export type DemoArticle = {
  id: string;
  title: string;
  tag?: string | null;
  tagColour?: string | null;
  releaseDate?: string | null;
  coverKind?: string | null;
  biasValue?: number | null;
  body?: string | null;

  // optional (if you use these in ArticleView)
  isPremium?: boolean;
  priceLabel?: string | null;
  up?: number;
  down?: number;
};

export const demoArticles: DemoArticle[] = [
  {
    id: "t2",
    title: "Demo title 2",
    tag: "technology",
    tagColour: "blue",
    releaseDate: "jan 7",
    coverKind: "monitor",
    biasValue: 0.5,
    body: "this is text",
    isPremium: false,
    priceLabel: null,
    up: 0,
    down: 0,
  },
  {
    id: "t3",
    title: "Demo title 3",
    tag: "science",
    tagColour: "green",
    releaseDate: "jan 8",
    coverKind: "microscope",
    biasValue: 0.5,
    body: "hello",
    isPremium: false,
    priceLabel: null,
    up: 0,
    down: 0,
  },
];

export function getDemoArticleById(id: string) {
  return demoArticles.find((a) => a.id === id) ?? null;
}
