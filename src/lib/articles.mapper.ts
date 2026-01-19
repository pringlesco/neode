// src/lib/articles.mapper.ts
import type { ArticleRow } from "./articles.supabase";
import type { ArticleCardData } from "@/components/home/ArticleCard";

export function rowToCard(a: ArticleRow): ArticleCardData {
  return {
    id: a.id,
    title: a.title,
    tag: a.tag,
    tagColor: a.tag_color ?? "slate",
    coverKind: (a.cover_kind as ArticleCardData["coverKind"]) ?? "paper",

    // optional / not in DB yet
    isPremium: false,
    priceLabel: undefined,

    releaseDate: a.release_date ?? "",
    up: a.up ?? 0,
    down: a.down ?? 0,
    biasValue: a.bias_value ?? 0.5,
  };
}
