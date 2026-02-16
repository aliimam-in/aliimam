/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Metadata } from "next";
import { Pattern } from "@/src/types/pattern";

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

export function debounce<T extends any[]>(
  fn: (...args: T) => any,
  timeout: number
) {
  let handle: NodeJS.Timeout;

  return function (...args: T) {
    clearTimeout(handle);
    handle = setTimeout(() => {
      fn(...args);
    }, timeout);
  };
}

export function searchPatterns(
  gridPatterns: Pattern[],
  category: string,
  searchInput: string
) {
  if (searchInput === "") return gridPatterns;

  const loweredInput = searchInput.toLowerCase();

  const inputWords = loweredInput.split(" ").filter(Boolean);

  const filteredPatterns = gridPatterns.filter((pattern) => {
    if (pattern.category === category || category === "all") {
      const patternWords = pattern.name.toLowerCase().split(" ");

      if (inputWords.length === 1 && inputWords[0].length === 1) {
        return patternWords[0].startsWith(inputWords[0]);
      }

      return inputWords.every((inputWord) =>
        patternWords.some((patternWord) => patternWord.startsWith(inputWord))
      );
    } else {
      return false;
    }
  });

  const sortedPatterns = filteredPatterns.sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();

    const posInA = aName.indexOf(inputWords[0]);
    const posInB = bName.indexOf(inputWords[0]);

    return posInA - posInB;
  });

  return sortedPatterns;
}