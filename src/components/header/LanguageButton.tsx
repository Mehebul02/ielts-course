"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function LanguageButton() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

 
  const currentLang = searchParams?.get("lang") || "en";
  const newLang = currentLang === "en" ? "bn" : "en";

  const handleLangChange = () => {
    // Create new params object safely
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("lang", newLang);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Button onClick={handleLangChange} className="bg-white text-black border hover:bg-gray-100 cursor-pointer">
      {currentLang === "en" ? "বাং" : "ENG"}
    </Button>
  );
}