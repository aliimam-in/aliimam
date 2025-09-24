/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type BlogPost = {
  url: string;
  title: string;
  description: string;
  date: string;
  tag: string[];
  image?: string;
  alt?: string;
  content?: string; // Added to include full content or a content snippet
};

type FeaturesProps = {
  posts: BlogPost[];
};

export function BlogPosts({ posts }: FeaturesProps) {
  // Default to first post's URL or empty string if no posts
  const [activeItem, setActiveItem] = useState<string>(posts[0]?.url || "");

  const truncateContent = (content: string, maxLength: number = 200) => {
    if (content.length <= maxLength) return content;
    return content.slice(0, maxLength) + "...";
  };

  const activePost = posts.find((post) => post.url === activeItem);

  return (
    <div className="mt-6 flex justify-center flex-col">
      <div className="relative z-10 space-y-3 text-center">
        <h2 className="text-3xl font-medium lg:text-5xl">
          UI, Animations & Web Dev
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl font-light text-sm md:text-md">
          Latest articles on UI components, animations, and web dev best practices for creating intuitive, engaging, and responsive web designs in 2025.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No blog posts available.
        </p>
      ) : (
        <div className="grid justify-center mt-6 md:mt-20 gap-10 lg:grid-cols-[40%_60%]">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={setActiveItem}
            className="w-full"
          >
            {posts.map((post) => (
              <AccordionItem key={post.url} value={post.url}>
                <AccordionTrigger className="hover:no-underline cursor-pointer">
                  <div className="flex items-center gap-2 text-base">
                    {post.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {post.description && (
                    <p className="text-sm text-muted-foreground">
                      {post.description}
                    </p>
                  )}
                  {post.content && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {truncateContent(post.content)}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-gray-500">
                    Published on: {post.date}
                  </p>
                  {post.tag.length > 0 && (
                    <p className="mt-1 text-sm text-gray-500">
                      Tags: {post.tag.join(", ")}
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="relative flex overflow-hidden rounded-3xl border p-2">
            <div className="relative rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="h-full w-full overflow-hidden rounded-2xl border bg-muted shadow-md"
                >
                  {activePost && (
                    <Link
                      href={activePost.url}
                      className=""
                    >
                      <img
                        src={activePost.image || ""}
                        alt={activePost.alt || activePost.title}
                        className="h-full w-full invert-0 dark:invert object-cover"
                        width={1207}
                        height={929}
                      />
                    </Link>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
