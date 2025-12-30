export default function TabNav() {
  const tabs = ["Home", "New to me", "Subscription", "Recommended", "Surprise me"];
  const active = "Home";

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="flex items-center gap-6 overflow-x-auto py-3 text-sm text-slate-600 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((t) => (
          <button
            key={t}
            className={[
              "relative whitespace-nowrap py-2",
              t === active ? "text-blue-600" : "hover:text-slate-900",
            ].join(" ")}
          >
            {t}
            {t === active && (
              <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-blue-600 rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
