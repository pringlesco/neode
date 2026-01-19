// src/app/supabase-test/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function SupabaseTestPage() {
  const [sessionData, setSessionData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (!mounted) return;

        if (error) {
          setError(error.message);
          setSessionData(null);
          return;
        }

        setSessionData(data);
        setError(null);
      } catch (e: any) {
        if (!mounted) return;
        setError(e?.message ?? String(e));
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Supabase Test</h1>

      {error ? (
        <pre style={{ color: "crimson" }}>{error}</pre>
      ) : (
        <pre>{JSON.stringify(sessionData, null, 2)}</pre>
      )}

      <p>If you see session data (even null), your keys are working.</p>
    </div>
  );
}
