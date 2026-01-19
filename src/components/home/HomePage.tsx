import TopNav from "./TopNav";
import TabNav from "./TabNav";
import Section from "./Section";
import ArticleCard from "./ArticleCard";

import Footer from "./Footer";
import { getAllArticles } from "@/lib/articles.supabase";
import { rowToCard } from "@/lib/articles.mapper";


function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 flex gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {children}
    </div>
  );
}

export default async function HomePage() {
  const rows = await getAllArticles();
  const cards = rows.map(rowToCard);

  const trending = cards.slice(0, 4);
  const justReleased = cards.slice(4, 8);
  const recommended = cards.slice(8, 12);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <TopNav />
      <TabNav />

      <main className="mx-auto max-w-6xl px-4 pb-16">
        <Section title="Trending Now" icon="flame" actionLabel="View all">
          <Row>
            {trending.length === 0 ? (
              <div className="text-slate-500 text-sm">No articles yet.</div>
            ) : (
              trending.map((a) => <ArticleCard key={a.id} article={a} />)
            )}
          </Row>
        </Section>

        <Section title="Just Released" icon="badge" actionLabel="View all">
          <Row>
            {justReleased.length === 0 ? (
              <div className="text-slate-500 text-sm">No articles yet.</div>
            ) : (
              justReleased.map((a) => <ArticleCard key={a.id} article={a} />)
            )}
          </Row>
        </Section>

        <Section title="Recommended for You" icon="spark" actionLabel="View all">
          <Row>
            {recommended.length === 0 ? (
              <div className="text-slate-500 text-sm">No articles yet.</div>
            ) : (
              recommended.map((a) => <ArticleCard key={a.id} article={a} />)
            )}
          </Row>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
