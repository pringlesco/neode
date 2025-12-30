import { demoArticles } from "@/lib/demoArticles";
console.log("DEMO ARTICLES IDS:", demoArticles.map(a => a.id).join(", "));


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
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
          {article.tag}
        </span>

        {article.isPremium && (
          <span className="rounded-full border px-3 py-1 text-xs text-slate-700">
            Premium {article.priceLabel ? `• ${article.priceLabel}` : ""}
          </span>
        )}
      </div>

      <h1 className="mt-4 text-3xl font-bold leading-tight">{article.title}</h1>

      <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
        <span>Release: {article.releaseDate}</span>
        <span>
          ▲ {article.up} &nbsp;&nbsp; ▼ {article.down}
        </span>
      </div>

      <div className="mt-5">
        <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">
          Political alignment
        </div>
        <BiasBar value={article.biasValue} />
      </div>

      <div className="mt-8 prose prose-slate max-w-none">
        {article.content.split("\n").map((line, i) =>
          line.trim() === "" ? <br key={i} /> : <p key={i}>{line}</p>
        )}
      </div>
    </article>
  );
}

function BiasBar({ value }: { value: number }) {
  const v = Math.max(0, Math.min(1, value));
  const left = v * 100;

  return (
    <div className="relative h-2 rounded-full overflow-hidden bg-slate-100">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-slate-200 to-red-500" />
      <div
        className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white border shadow"
        style={{ left: `calc(${left}% - 8px)` }}
      />
    </div>
  );
}
