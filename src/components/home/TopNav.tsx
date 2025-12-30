import Icon from "./icons/Icon";

export default function TopNav() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center gap-4">
        <div className="flex items-center gap-2 min-w-[120px]">
          <div className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-semibold">
            N
          </div>
          <div className="text-xl font-semibold">Neode</div>
        </div>

        {/* Search */}
        <div className="flex-1 hidden sm:block">
          <div className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm text-slate-600">
            <Icon name="search" className="h-4 w-4 text-slate-500" />
            <input
              className="w-full outline-none bg-transparent placeholder:text-slate-400"
              placeholder="Search articles, authors, or topics..."
            />
          </div>
        </div>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:bg-slate-50">
            <Icon name="pen" className="h-4 w-4" />
            Write
          </button>

          <button className="sm:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border hover:bg-slate-50">
            <Icon name="search" className="h-4 w-4" />
          </button>

          <button className="inline-flex items-center justify-center h-10 w-10 rounded-full border hover:bg-slate-50">
            <Icon name="bell" className="h-4 w-4" />
          </button>

          <button className="inline-flex items-center justify-center h-10 w-10 rounded-full border hover:bg-slate-50">
            <Icon name="user" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
