import { demoArticles } from "@/lib/demoArticles";
export default function ArticleView({ id }: { id: string }) {
  const article = demoArticles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="rounded-2xl border p-6">
        <h1 className="text-xl font-semibold">Article not found</h1>
        <p className="mt-2 text-slate-600 text-sm">
          No demo article exists for id: <span className="font-mono">{id}</span>
        </p>
      </div>
    );
  }

  return (
    <article>
      <div className="flex items-center gap-2">
        {article.tag ? (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
            {article.tag}
          </span>
        ) : null}
      </div>

      <h1 className="mt-4 text-3xl font-bold leading-tight">{article.title}</h1>

      <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
        <span>Release: {article.releaseDate ?? ""}</span>
      </div>

      <div className="mt-8 space-y-4 text-slate-800 leading-7">
        {article.body?.split("\n").map((line, i) =>
          line.trim() === "" ? <br key={i} /> : <p key={i}>{line}</p>
        )}
      </div>
    </article>
  );
}
