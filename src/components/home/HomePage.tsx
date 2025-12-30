import TopNav from "./TopNav";
import TabNav from "./TabNav";
import Section from "./Section";
import ArticleCard from "./ArticleCard";
import Footer from "./Footer";

import { demoArticles } from "@/lib/demoArticles";

export default function HomePage() {
  const trending = demoArticles.filter((a) => a.id.startsWith("t"));
  const justReleased = demoArticles.filter((a) => a.id.startsWith("j"));
  const recommended = demoArticles.filter((a) => a.id.startsWith("r"));

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <TopNav />
      <TabNav />

      <main className="mx-auto max-w-6xl px-4 pb-16">
        <Section title="Trending Now" icon="flame" actionLabel="View all">
          <Row>
            {trending.map((a) => (
              <ArticleCard key={a.id} data={a} />
            ))}
          </Row>
        </Section>

        <Section title="Just Released" icon="badge" actionLabel="View all">
          <Row>
            {justReleased.map((a) => (
              <ArticleCard key={a.id} data={a} />
            ))}
          </Row>
        </Section>

        <Section title="Recommended for You" icon="spark" actionLabel="View all">
          <Row>
            {recommended.map((a) => (
              <ArticleCard key={a.id} data={a} />
            ))}

            <div className="min-w-[240px] max-w-[240px]">
              <div className="h-full rounded-2xl border bg-white p-6 flex flex-col items-center justify-center">
                <div className="h-12 w-12 rounded-full border flex items-center justify-center text-slate-500">
                  →
                </div>
                <div className="mt-3 text-sm text-slate-600">View All</div>
              </div>
            </div>
          </Row>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 flex gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {children}
    </div>
  );
}
