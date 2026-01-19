import Link from "next/link";

export type ArticleCardData = {
  id: string | number;
  title: string;
  tag?: string | null;
  tagColor?: string;
  coverKind?: "paper" | "phone" | "desktop" | string;
  isPremium?: boolean;
  priceLabel?: string;
  releaseDate?: string;
  up?: number;
  down?: number;
  biasValue?: number; // 0..1
};

type Props = {
  data?: ArticleCardData;
  article?: ArticleCardData;
};

export default function ArticleCard(props: Props) {
  const item = props.data ?? props.article;

  // ✅ Guard (prevents crash)
  if (!item || item.id === undefined || item.id === null) return null;

  // ✅ Bias calculations (safe)
  const biasRaw = item.biasValue;
  const bias =
    typeof biasRaw === "number" && Number.isFinite(biasRaw) ? biasRaw : 0.5;
  const pct = Math.round(Math.min(1, Math.max(0, bias)) * 100);

  return (
    <Link href={`/article/${item.id}`} className="block">
      <article className="min-w-[260px] max-w-[260px] rounded-2xl border bg-white overflow-hidden hover:shadow-sm transition">
        {/* Cover */}
        <div className="relative h-40 bg-slate-50" />

        <div className="p-4">
          {/* Tag / Premium */}
          {item.isPremium ? (
            <div className="mb-2 inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-slate-900 text-white">
              Premium{item.priceLabel ? ` · ${item.priceLabel}` : ""}
            </div>
          ) : item.tag ? (
            <div className="mb-2 inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700">
              {item.tag}
            </div>
          ) : null}

          {/* Title */}
          <h3 className="mt-1 font-semibold leading-snug">{item.title}</h3>

          {/* Release date */}
          {item.releaseDate ? (
            <div className="mt-2 text-xs text-slate-500">
              RELEASE DATE
              <div className="mt-1">{item.releaseDate}</div>
            </div>
          ) : null}

          {/* Votes */}
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
            <div>↑ {item.up ?? 0}</div>
            <div>↓ {item.down ?? 0}</div>
          </div>

          {/* Political Bias Spectrum */}
          <div className="mt-3">
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>Left</span>
              <span>Center</span>
              <span>Right</span>
            </div>

            <div className="relative mt-1 h-2 w-full rounded-full overflow-hidden border border-slate-200 bg-gradient-to-r from-blue-600 via-slate-200 to-red-600">
              {/* center tick */}
              <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-slate-300" />

              {/* marker dot */}
              <div
                className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white border border-slate-900 shadow"
                style={{ left: `${pct}%` }}
                title={`Bias: ${pct}%`}
              />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
