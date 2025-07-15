"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "@/lib/fpixel";

export default function FacebookPixel() {
  const pathname = usePathname();

  useEffect(() => {
    pageview();
  }, [pathname]);

  return null;
}
