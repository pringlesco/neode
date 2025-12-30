import Icon from "./icons/Icon";

export default function Section({
  title,
  icon,
  actionLabel,
  children,
}: {
  title: string;
  icon: "flame" | "badge" | "spark";
  actionLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-slate-100 flex items-center justify-center">
            <Icon name={icon} className="h-4 w-4 text-slate-700" />
          </div>
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>

        {actionLabel && (
          <button className="text-sm text-blue-600 hover:underline">
            {actionLabel} →
          </button>
        )}
      </div>

      {children}
    </section>
  );
}
