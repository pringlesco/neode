import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export const dynamic = "force-dynamic";

type ArticleRow = {
  id: string;
  title: string;
  tag: string | null;
  tag_colour: string | null;
  release_date: string | null;
  cover_kind: string | null;
  bias_value: number | null;
  body: string | null;
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ Next 16 / Turbopack: params can be a Promise
  const { id } = await params;

  const { data: article, error } = await supabase
    .from("articles")
    .select("id,title,tag,tag_colour,release_date,cover_kind,bias_value,body")
    .eq("id", id)
    .maybeSingle<ArticleRow>();

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back
        </Link>
        <h1 className="mt-6 text-2xl font-semibold">Article error</h1>
        <pre className="mt-4 text-xs text-slate-500 whitespace-pre-wrap">
          {JSON.stringify({ id, error }, null, 2)}
        </pre>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back
        </Link>
        <h1 className="mt-6 text-2xl font-semibold">Article not found</h1>
        <p className="mt-2 text-slate-600">
          This article doesn’t exist (or you don’t have access).
        </p>
        <pre className="mt-4 text-xs text-slate-500 whitespace-pre-wrap">
          {JSON.stringify({ id }, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back
      </Link>

      <h1 className="mt-6 text-3xl font-semibold">{article.title}</h1>

      <div className="mt-2 text-sm text-slate-500">
        {article.tag ? <span className="mr-3">{article.tag}</span> : null}
        {article.release_date ? <span>{article.release_date}</span> : null}
      </div>

      <div className="mt-8 space-y-4 text-slate-800 leading-7">
        {article.body ? (
          <p className="whitespace-pre-wrap">{article.body}</p>
        ) : (
          <p className="text-slate-500">(No body text yet.)</p>
        )}
      </div>
    </div>
  );
}
