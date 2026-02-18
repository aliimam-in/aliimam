/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { mdxComponents } from "@/mdx-components"
import { BlogTableOfContents } from "@/src/components/docs/table-of-contents"
import { siteConfig } from "@/src/lib/config"
import { blogSource } from "@/src/lib/source"
import { absoluteUrl, calculateReadingTime, formatDate } from "@/src/lib/utils"
import type { BlogPosting, WithContext } from "schema-dts"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

interface PageProps {
  params: Promise<{
    slug: string[]
  }>
}

export function generateStaticParams() {
  return blogSource.generateParams()
}

async function getDocFromParams({ params }: PageProps) {
  const { slug } = await params
  const page = blogSource.getPage(slug)
  if (!page) notFound()
  const doc = page.data
  if (!doc.title || !doc.description) {
    notFound()
  }

  return { doc, page }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { doc, page } = await getDocFromParams({ params })

  if (!page) {
    return {}
  }

  return {
    title: `${doc.title} | ${siteConfig.name}`,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(page.url),
      images: [
        {
          url: doc.image || "",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,

      images: [doc.image || ""],
      creator: "@dillionverma",
    },
  }
}

export default async function BlogPage({ params }: PageProps) {
  const { doc, page } = await getDocFromParams({ params })

  const MDX = doc.body

  // Generate structured data for individual blog post
  const structuredData: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: doc.title,
    description: doc.description,
    url: absoluteUrl(page.url),
    datePublished: doc.publishedOn,
    dateModified: doc.publishedOn,
    author: {
      "@type": "Person",
      name: doc.author || "Ali Imam",
      url: siteConfig.links?.twitter,
    },
    image: doc.image ? [doc.image] : undefined,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(page.url),
    },
    wordCount: doc.content ? doc.content.split(/\s+/).length : 0,
    timeRequired: `PT${calculateReadingTime(doc.content || "")}M`,
    keywords: (() => {
      const docTag = doc.tag
      if (!docTag) return undefined
      return Array.isArray(docTag) ? docTag : [docTag]
    })(),
    inLanguage: "en-US",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div data-slot="blocks" className="flex items-stretch xl:w-full">
        <div className="sticky top-16 z-30 ml-auto hidden h-[calc(100svh-var(--footer-height)+2rem)] w-64 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
          <div className="h-(--top-spacing) shrink-0" />
          <div className="px-6">All Blog List</div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col rounded-md border-x">
          <div className="flex items-center gap-3 border-b p-3 px-6">
            <Link
              className="text-muted-foreground hover:text-primary"
              href={"/blogs"}
            >
              Back to All Blogs
            </Link>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-10 px-6 pb-10 md:gap-20 lg:px-10">
            <article className="mt-6 lg:mt-10">
              {doc && (
                <div>
                  <div className="relative flex justify-center rounded-md border p-1">
                    <img
                      src={doc.image}
                      alt={doc.title}
                      className="h-[300px] w-full rounded-md border object-cover invert-0 dark:invert"
                    />
                  </div>
                  <div className="mx-auto flex flex-col items-center justify-center gap-y-2 py-6">
                    <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-y-2">
                      <h1 className="text-center text-3xl font-semibold tracking-tighter text-balance md:text-5xl">
                        {doc.title}
                      </h1>
                      <p className="text-secondary-foreground text-center text-balance md:text-lg">
                        {doc.description}
                      </p>
                      {doc.publishedOn && (
                        <time className="text-secondary-foreground text-sm">
                          {formatDate(doc.publishedOn)}
                        </time>
                      )}
                    </div>
                  </div>
                  <div className="text-secondary-foreground flex items-center justify-center gap-x-2 rounded-md border p-3 text-sm">
                    <span>{calculateReadingTime(doc.content)} min read</span>
                    {(() => {
                      const docTag = doc.tag
                      const tags = docTag
                        ? Array.isArray(docTag)
                          ? docTag
                          : [docTag]
                        : []

                      return (
                        tags.length > 0 && (
                          <>
                            <span>·</span>
                            <div className="flex flex-wrap gap-1">
                              {tags.map((tag) => (
                                <Link
                                  key={tag}
                                  href={`/blogs?tag=${encodeURIComponent(tag)}`}
                                  className="border-border bg-primary/5 hover:bg-primary/10 rounded-full border px-2.5 py-0.5 transition-colors"
                                >
                                  {tag}
                                </Link>
                              ))}
                            </div>
                          </>
                        )
                      )
                    })()}
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 gap-x-1 lg:grid-cols-7">
                <div className="article-content col-span-5 p-5 lg:p-10">
                  <MDX components={mdxComponents} />
                </div>
                <div className="text-primary sticky top-16 col-span-2 hidden h-fit w-full flex-col items-start justify-start p-5 lg:flex">
                  <div className="h-10" />
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="sticky top-16 z-30 ml-auto hidden h-[calc(100svh-var(--footer-height)+2rem)] w-64 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
          <div className="h-(--top-spacing) shrink-0" />
          <div className="px-6">
            <BlogTableOfContents />
          </div>
        </div>
      </div>
    </>
  )
}
