import Link from "next/link";
import Icon from "./icons/Icon";

export type TagColor =
  | "orange"
  | "blue"
  | "purple"
  | "teal"
  | "green"
  | "lime"
  | "indigo"
  | "pink"
  | "cyan"
  | "amber";

export type CoverKind =
  | "paper"
  | "monitor"
  | "tablet"
  | "doc"
  | "phone"
  | "wordmark"
  | "frame"
  | "wreath"
  | "sphere"
  | "scribble"
  | "receipt";

export type ArticleCardData = {
  id: string;
  title: string;
  tag: string;
  tagColor: TagColor;
  coverKind: CoverKind;
  isPremium: boolean;
  priceLabel?: string;
  releaseDate: string;
  up: number;
  down: number;
  biasValue: number; // 0..1 knob position
};

const tagColors: Record<TagColor, string> = {
  orange: "bg-orange-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  teal: "bg-teal-500",
  green: "bg-green-500",
  lime: "bg-lime-500",
  indigo: "bg-indigo-500",
  pink: "bg-pink-500",
  cyan: "bg-cyan-500",
  amber: "bg-amber-500",
};

export default function ArticleCard({ data }: { data: ArticleCardData }) {
  return (
    <Link href={`/article/${data.id}`} className="block">
      <article className="min-w-[260px] max-w-[260px] rounded-2xl border bg-white overflow-hidden hover:shadow-sm transition">
        {/* Cover */}
        <div className="relative h-40 bg-slate-50">
          <div className="absolute inset-0 flex items-center justify-center">
            <Cover kind={data.coverKind} />
          </div>

          {/* Premium badge */}
          {data.isPremium && (
            <div className="absolute right-3 top-3 rounded-full bg-white/95 border px-2.5 py-1 text-xs flex items-center gap-1 shadow-sm">
              <Icon name="lock" className="h-3.5 w-3.5 text-slate-700" />
              <span className="text-slate-700">{data.priceLabel ?? "$"}</span>
            </div>
          )}

          {/* Tag pill */}
          <div
            className={[
              "absolute left-3 bottom-3 rounded-full px-2.5 py-1 text-xs text-white shadow-sm",
              tagColors[data.tagColor],
            ].join(" ")}
          >
            {data.tag}
          </div>
        </div>

        {/* Body */}
        <div className="p-4">
          <h3 className="font-semibold leading-snug text-slate-900 min-h-[44px]">
            {data.title}
          </h3>

          {/* Bias bar */}
          <div className="mt-3">
            <BiasBar value={data.biasValue} />
          </div>

          {/* Release + stats */}
          <div className="mt-3 text-[11px] text-slate-500">
            <div className="uppercase tracking-wide">Release date</div>

            <div className="mt-1 flex items-center justify-between">
              <span>{data.releaseDate}</span>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <Icon name="arrowUp" className="h-3.5 w-3.5" />
                  {data.up}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Icon name="arrowDown" className="h-3.5 w-3.5" />
                  {data.down}
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

function BiasBar({ value }: { value: number }) {
  const v = Math.max(0, Math.min(1, value));
  const left = v * 100;

  return (
    <div className="relative h-2 rounded-full overflow-hidden bg-slate-100">
      {/* Blue -> light -> red */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-slate-200 to-red-500" />
      {/* knob */}
      <div
        className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white border shadow"
        style={{ left: `calc(${left}% - 8px)` }}
        aria-label="Political bias"
      />
    </div>
  );
}

/** Simple placeholder art that looks like the mock */
function Cover({ kind }: { kind: CoverKind }) {
  // soft gradient background like the screenshot
  const back =
    "h-28 w-44 rounded-xl bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center";

  switch (kind) {
    case "monitor":
      return (
        <div className={back}>
          <div className="flex flex-col items-center opacity-80">
            <div className="h-14 w-20 rounded-md bg-slate-500/40" />
            <div className="h-2 w-10 rounded bg-slate-500/35 mt-2" />
          </div>
        </div>
      );

    case "paper":
      return (
        <div className={back}>
          <div className="h-20 w-28 rounded-lg bg-white/70 border border-white/60 flex items-center justify-center">
            <div className="text-[10px] tracking-widest uppercase text-slate-400">
              Article
            </div>
          </div>
        </div>
      );

    case "tablet":
      return (
        <div className={back}>
          <div className="h-20 w-16 rounded-xl bg-slate-500/35" />
        </div>
      );

    case "doc":
      return (
        <div className={back}>
          <div className="h-20 w-14 rounded-md bg-white/70 border border-white/60" />
        </div>
      );

    case "phone":
      return (
        <div className={back}>
          <div className="h-22 w-12 rounded-2xl bg-white/70 border border-white/60" />
        </div>
      );

    case "wordmark":
      return (
        <div className={back}>
          <div className="text-slate-400 font-semibold tracking-wide">
            ANRTICAL
          </div>
        </div>
      );

    case "frame":
      return (
        <div className={back}>
          <div className="h-20 w-28 rounded bg-white/60 border border-white/60" />
        </div>
      );

    case "wreath":
      return (
        <div className={back}>
          <div className="h-16 w-16 rounded-full bg-green-300/40 flex items-center justify-center">
            <div className="h-7 w-9 rounded bg-white/70 border border-white/60" />
          </div>
        </div>
      );

    case "sphere":
      return (
        <div className={back}>
          <div className="h-14 w-14 rounded-full bg-slate-500/35 border border-white/30" />
        </div>
      );

    case "scribble":
      return (
        <div className={back}>
          <div className="text-3xl text-slate-400">Artuicle</div>
        </div>
      );

    case "receipt":
      return (
        <div className={back}>
          <div className="h-20 w-14 rounded-md bg-white/70 border border-white/60" />
        </div>
      );

    default:
      return <div className={back} />;
  }
}
