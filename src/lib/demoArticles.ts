import type { ArticleCardData } from "@/components/home/ArticleCard";

export type DemoArticle = ArticleCardData & { content: string };

export const demoArticles: DemoArticle[] = [
  {
    id: "t1",
    title: "The Future of AI: What to expect in 2024",
    tag: "Technology",
    tagColor: "orange",
    coverKind: "paper",
    isPremium: true,
    priceLabel: "$3.99",
    releaseDate: "Oct 24",
    up: 12,
    down: 0,
    biasValue: 0.78,
    content:
      "This is a demo article.\n\nLater we will load real articles from Supabase.\n\nFor now, each article page is created using the URL id (like /article/t1).",
  },
  {
    id: "t2",
    title: "Global Markets shift as tech stocks rally",
    tag: "Finance",
    tagColor: "blue",
    coverKind: "monitor",
    isPremium: false,
    releaseDate: "Oct 23",
    up: 85,
    down: 3,
    biasValue: 0.55,
    content:
      "This is a demo finance article.\n\nNext step: store title/content in the database and render it here.",
  },
  {
    id: "t3",
    title: "Cyber Security Trends in the banking sector",
    tag: "Security",
    tagColor: "purple",
    coverKind: "tablet",
    isPremium: true,
    priceLabel: "$3.99",
    releaseDate: "Oct 22",
    up: 104,
    down: 8,
    biasValue: 0.66,
    content:
      "This is a demo security article.\n\nSoon: authentication + premium + paywall logic.",
  },
  {
    id: "t4",
    title: "Minimalism UI: Less is actually more",
    tag: "Design",
    tagColor: "teal",
    coverKind: "doc",
    isPremium: false,
    releaseDate: "Oct 21",
    up: 45,
    down: 2,
    biasValue: 0.18,
    content:
      "This is a demo design article.\n\nWe’ll later add tags, images, and author profiles.",
  },
];
