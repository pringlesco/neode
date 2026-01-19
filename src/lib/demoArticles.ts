import { createClient } from "@supabase/supabase-js";

export type Article = {
  id: string;
  title: string;
  tag: string | null;
  tag_colour: string | null;
  release_date: string | null;
  cover_kind: string | null;
  bias_value: number | null;
  body: string | null;
  created_at: string | null;
};

function supabaseServer() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export async function getArticleById(id: string): Promise<Article | null> {
  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("articles")
    .select(
      "id,title,tag,tag_colour,release_date,cover_kind,bias_value,body,created_at"
    )
    .eq("id", id)
    // IMPORTANT: avoids PGRST116 when 0 rows match
    .maybeSingle<Article>();

  if (error) {
    console.error("getArticleById error:", error);
    return null;
  }

  return data ?? null;
}
