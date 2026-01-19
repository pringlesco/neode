"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function WritePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("technology");
  const [tagColour, setTagColour] = useState("blue");
  const [body, setBody] = useState("");

  // NEW: image
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  function onPickImage(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] ?? null;
    setImageFile(f);
    setError(null);
    setOk(null);

    if (f) {
      const url = URL.createObjectURL(f);
      setImagePreview(url);
    } else {
      setImagePreview(null);
    }
  }

  async function uploadCoverImage(file: File): Promise<string> {
    // Ensure unique filename
    const ext = file.name.split(".").pop() || "png";
    const fileName = `${crypto.randomUUID()}.${ext}`;
    const filePath = `covers/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("article-images")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
        contentType: file.type || undefined,
      });

    if (uploadError) {
      throw new Error(uploadError.message);
    }

    // Public URL (because bucket is public)
    const { data } = supabase.storage.from("article-images").getPublicUrl(filePath);

    const publicUrl = data.publicUrl;
    if (!publicUrl) throw new Error("Could not generate public URL.");
    return publicUrl;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setOk(null);

    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    if (!body.trim()) {
      setError("Body is required.");
      return;
    }

    setLoading(true);

    try {
      let coverImageUrl: string | null = null;

      // Upload image if chosen
      if (imageFile) {
        coverImageUrl = await uploadCoverImage(imageFile);
      }

      // Insert row (id will auto-generate because you fixed UUID default)
      const { data, error: insertError } = await supabase
        .from("articles")
        .insert([
          {
            title,
            tag,
            tag_colour: tagColour,
            body,
            cover_image: coverImageUrl,
            // Optional defaults if your table has these columns:
            // release_date: "jan 7",
            // cover_kind: "monitor",
            // bias_value: 0.5,
          },
        ])
        .select("id")
        .single();

      if (insertError) throw new Error(insertError.message);

      setOk("Published!");
      // go to the article page
      router.push(`/article/${data.id}`);
      router.refresh();
    } catch (err: any) {
      setError(err?.message ?? "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-4xl font-semibold">Write</h1>
      <p className="mt-2 text-slate-500">Create a new article.</p>

      <form onSubmit={onSubmit} className="mt-10 space-y-6">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            className="mt-2 w-full rounded-lg border px-3 py-2 outline-none focus:ring"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Your headline..."
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Tag</label>
            <input
              className="mt-2 w-full rounded-lg border px-3 py-2 outline-none focus:ring"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="technology"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Tag colour</label>
            <input
              className="mt-2 w-full rounded-lg border px-3 py-2 outline-none focus:ring"
              value={tagColour}
              onChange={(e) => setTagColour(e.target.value)}
              placeholder="blue"
            />
          </div>
        </div>

        {/* NEW: Image upload */}
        <div>
          <label className="block text-sm font-medium">Cover image</label>
          <input
            className="mt-2 w-full rounded-lg border px-3 py-2 outline-none focus:ring"
            type="file"
            accept="image/*"
            onChange={onPickImage}
          />

          {imagePreview ? (
            <div className="mt-4">
              <div className="text-sm text-slate-500 mb-2">Preview:</div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imagePreview}
                alt="cover preview"
                className="max-h-64 rounded-lg border object-contain"
              />
            </div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium">Body</label>
          <textarea
            className="mt-2 w-full rounded-lg border px-3 py-2 outline-none focus:ring"
            rows={12}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your article..."
          />
        </div>

        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700">
            {error}
          </div>
        ) : null}

        {ok ? (
          <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-700">
            {ok}
          </div>
        ) : null}

        <button
          disabled={loading}
          className="rounded-full border px-6 py-3 text-sm hover:bg-slate-50 disabled:opacity-60"
        >
          {loading ? "Publishing..." : "Publish"}
        </button>
      </form>
    </div>
  );
}
