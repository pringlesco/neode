import Link from "next/link";
import ArticleView from "@/components/article/ArticleView";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          ← Back to Home
        </Link>

        <div className="mt-6">
          <ArticleView id={id} />
        </div>
      </div>
    </main>
  );
}
