"use client";

import * as React from "react";
import "@/src/styles/globals.css";
import { useConfig } from "@/src/hooks/use-config";
import { cn } from "@/src/lib/utils";

export default function ViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [config] = useConfig();
  const divRef = React.useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (divRef.current) {
      divRef.current.style.setProperty("--radius", `${config.radius}rem`);
    }
  }, [config.radius]);

  if (!mounted) return null;

  return (
    <div ref={divRef} className={cn("theme-container")}>
      {children}
    </div>
  );
}
