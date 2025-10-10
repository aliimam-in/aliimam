import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export const pluralize = (count: number, word: string) =>
  `${count} ${word}${count === 1 ? "" : "s"}`;

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export const calculateReadingTime = (content: string): number => {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
};

export const normalizeTag = (tag: unknown): string[] => {
  if (!tag) return [];
  return Array.isArray(tag)
    ? tag.filter((t): t is string => typeof t === "string")
    : [String(tag)];
};
 
export function constructMetadata({
  title = "Ali Imam - Modern React + Tailwind CSS components & Templates",
  description = "Ali Imam is a curated collection of the best landing page components built using React + Tailwind CSS + Motion",
  image = absoluteUrl("/og"),
  ...props
}: {
  title?: string;
  description?: string;
  image?: string;
  [key: string]: Metadata[keyof Metadata];
}): Metadata {
  return {
    title,
    description,
    keywords: [
      "React",
      "Tailwind CSS",
      "Motion",
      "Landing Page",
      "Components",
      "Next.js",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@aliimam",
    },
    icons: "/favicon.ico",
    metadataBase: new URL("https://aliimam.in"),
    authors: [
      {
        name: "aliimam",
        url: "https://x.com/aliimam-in",
      },
    ],
    creator: "aliimam",
    ...props,
  };
}