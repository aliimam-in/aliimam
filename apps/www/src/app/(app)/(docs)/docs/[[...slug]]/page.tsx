import Link from "next/link";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/mdx-components";

import { findNeighbour } from "fumadocs-core/server";

import { source } from "@/src/lib/source";
import { absoluteUrl } from "@/src/lib/utils";
import { DocsCopyPage } from "@/src/components/docs/docs-copy-page";
import { DocsTableOfContents } from "@/src/components/docs/docs-toc";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { DocThemeSelector } from "@/src/components/docs/theme-selector";
import { Separator } from "@/registry/default/ui/separator";
 
export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const doc = page.data;

  if (!doc.title || !doc.description) {
    notFound();
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(page.url),
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
      creator: "@ali",
    },
  };
}

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) {
    notFound();
  }

  const doc = page.data;
  // @ts-expect-error - revisit fumadocs types.
  const MDX = doc.body;
  const neighbours = await findNeighbour(source.pageTree, page.url);

  // @ts-expect-error - revisit fumadocs types.
  const links = doc.links;

  return (
    <div
      data-slot="blocks"
      className="flex relative items-stretch xl:w-full"
    >
      <div className="flex min-w-0 flex-1 border rounded-md flex-col"> 
        <div className="px-6 pt-6 flex flex-1 gap-10 pb-10 md:gap-20 min-w-0 flex-col">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
                  {doc.title}
                </h1>
                <div className="docs-nav border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
                  <DocsCopyPage
                    // @ts-expect-error - revisit fumadocs types.
                    page={doc.content}
                    url={absoluteUrl(page.url)}
                  />
                  {neighbours.previous && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="extend-touch-target ml-auto size-8 shadow-none md:size-7"
                      asChild
                    >
                      <Link href={neighbours.previous.url}>
                        <ArrowLeft />
                        <span className="sr-only">Previous</span>
                      </Link>
                    </Button>
                  )}
                  {neighbours.next && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="extend-touch-target size-8 shadow-none md:size-7"
                      asChild
                    >
                      <Link href={neighbours.next.url}>
                        <span className="sr-only">Next</span>
                        <ArrowRight />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              {doc.description && (
                <p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
                  {doc.description}
                </p>
              )}
            </div>
            {links ? (
              <div className="flex items-center space-x-2 pt-4">
                {links?.doc && (
                  <Badge variant="secondary">
                    <Link className="flex" href={links.doc} target="_blank" rel="noreferrer">
                      Docs <ArrowUpRight />
                    </Link>
                  </Badge>
                )}
                {links?.api && (
                  <Badge variant="secondary">
                    <Link className="flex" href={links.api} target="_blank" rel="noreferrer">
                      API Reference <ArrowUpRight />
                    </Link>
                  </Badge>
                )}
                {links?.shadcn && (
                  <Badge variant="secondary">
                    <Link className="flex" href={links.shadcn} target="_blank" rel="noreferrer">
                      shadcn/ui <ArrowUpRight />
                    </Link>
                  </Badge>
                )}
              </div>
            ) : null}
          </div>
          <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
            <MDX components={mdxComponents} />
          </div>
          <div className="hidden mb-2 lg:mb-6 h-16 w-full items-center gap-2 px-4 sm:flex md:px-0">
            {neighbours.previous && (
              <Button
                variant="secondary"
                size="sm"
                asChild
                className="shadow-none"
              >
                <Link href={neighbours.previous.url}>
                  <ArrowLeft /> {neighbours.previous.name}
                </Link>
              </Button>
            )}
            {neighbours.next && (
              <Button
                variant="secondary"
                size="sm"
                className="ml-auto shadow-none"
                asChild
              >
                <Link href={neighbours.next.url}>
                  {neighbours.next.name} <ArrowRight />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="sticky top-24 z-30 ml-auto hidden h-[calc(100svh-var(--footer-height)+2rem)] w-60 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
        <DocThemeSelector className="hidden py-3 md:flex" /> 
        {/* @ts-expect-error - revisit fumadocs types. */}
        {doc.toc?.length ? (
          <div className="no-scrollbar overflow-y-auto px-6">
             <Separator className="mb-6"/>
            {/* @ts-expect-error - revisit fumadocs types. */}
            <DocsTableOfContents toc={doc.toc} />
            
          </div>
        ) : null}
        <div className="flex flex-1 flex-col gap-12 px-6"></div>
      </div>
    </div>
  );
}
