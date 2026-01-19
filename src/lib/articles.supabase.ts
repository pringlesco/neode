import { supabase } from "./supabaseClient";

export type ArticleRow = {
  id: string;
  title: string;
  tag: string;
  tag_color: string | null;
  cover_kind: string | null;
  release_date: string | null;
  up: number | null;
  down: number | null;
  bias_value: number | null;
  body: string | null;
  created_at: string;
};

export async function getAllArticles() {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return (data ?? []) as ArticleRow[];
}

export async function getArticleById(id: string) {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return (data ?? null) as ArticleRow | null;
}
