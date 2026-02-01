"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import type { Locale } from "@/types/resume";

export default function LangSync() {
  const searchParams = useSearchParams();
  const locale: Locale = searchParams.get("lang") === "en" ? "en" : "pt";

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "pt-BR";
  }, [locale]);

  return null;
}
