/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { useIsMobile } from "@/src/hooks/use-mobile";
import { cn } from "@/src/lib/utils";
import { Button } from "@/registry/default/ui/button";
import { ArrowLeft, Expand, Loader2, X } from "lucide-react";
import { Github } from "@aliimam/logos";

interface CardProps {
  card: {
    id: number;
    title: string;
    src: string;
    demoUrl?: string;
    repoUrl?: string;
    cmd?: string;
    imgHeight: number;
    subheading?: string;
  };
}

export default function Card({ card }: CardProps) {
  const isMobile = useIsMobile();
  const [loading, setLoading] = useState(true);
  const [isFullscreen] = useState(false);

  return (
    <div className="bg-border/50 relative my-6 mt-0 rounded-xl border p-4">
      <Dialog key={card.id}>
        <DialogTrigger className="w-full" key={card.id}>
          <div
            key={card.id}
            className={cn(
              "focused group h-full w-full overflow-hidden rounded-sm"
            )}
          >
            <div className="p-0">
              <div>
                <img
                  className="w-full cursor-pointer rounded-md"
                  src={card.src}
                  alt={card.title}
                  width={800}
                  height={card.imgHeight}
                />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <h2 className="text-sm font-medium">{card.title}</h2>
              {card.demoUrl && card.repoUrl ? (
                <div className="flex items-center gap-4"> 
                  <Link
                    href={card.repoUrl}
                    className="inline-flex items-center gap-1 text-sm hover:underline"
                    target="_blank"
                  >
                    <Github />
                  </Link>
                </div>
              ) : (
                <span className="text-sm text-zinc-500">Code soon</span>
              )}
            </div>
          </div>
        </DialogTrigger>
        <DialogContent
          className={cn(
            "bg-background flex flex-col gap-0 overflow-hidden p-2 transition-all duration-200",
            isMobile
              ? "m-0 h-screen w-screen max-w-none"
              : isFullscreen
                ? "m-0 h-screen w-screen max-w-none"
                : "h-[90vh] w-[90vw] max-w-[1400px]"
          )}
        >
          {!isMobile && (
            <DialogHeader className="flex h-14 flex-row items-center justify-between px-4 text-sm">
              <div className="flex items-center gap-4">
                <DialogTitle className="text-xl font-medium">
                  {card.title}
                </DialogTitle>
              </div>
              <div>
                <div className="bg-secondary text-primary/70 relative hidden items-center gap-2 rounded-full border p-1 px-4 lg:flex">
                  {card.demoUrl}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-4 pl-2">
                  <Link
                    href={card.demoUrl || "/"}
                    className="inline-flex items-center gap-1 text-sm hover:underline"
                    target="_blank"
                  >
                    <Expand />
                  </Link>
                  <DialogClose>
                    <X/>
                  </DialogClose>
                </div>
              </div>
            </DialogHeader>
          )}
          <div className="relative h-[calc(80vh-3.5rem)] flex-1 overflow-hidden">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <Loader2 className="h-10 w-10 animate-spin text-gray-500" />
              </div>
            )}
            <div className="h-[125%] w-[125%] origin-top-left scale-[0.8]">
              <iframe
                src={card.demoUrl}
                className="h-full w-full border-0"
                onLoad={() => setLoading(false)}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          {isMobile && (
            <div className="flex h-16 flex-shrink-0 flex-row items-center justify-between space-y-0 border-t px-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex min-w-0 flex-col">
                  <DialogTitle className="text-xl font-medium">
                    {card.title}
                  </DialogTitle>
                </div>
              </div>
              <div className="flex gap-2">
                <DialogClose>
                  <Button size={"icon"}>
                    <ArrowLeft size={16} />
                  </Button>
                </DialogClose>
              </div>
            </div>
          )}
          <div>
            <div className="-mb-2 flex items-center justify-between gap-2 border-t p-2">
              <p className="text-xs">{card.subheading}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
