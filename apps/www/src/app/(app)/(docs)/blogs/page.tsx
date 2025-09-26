import { SidebarTrigger } from "@/registry/default/ui/sidebar";
import { siteConfig } from "@/src/lib/config";
import { blogSource } from "@/src/lib/source";
import {
  calculateReadingTime,
  constructMetadata,
  formatDate,
  normalizeTag,
  pluralize,
} from "@/src/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import type { Blog, WithContext } from "schema-dts";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [];
}

const BLOG_DESCRIPTION =
  "Latest articles about UI components, animations, and web development best practices.";

export const metadata: Metadata = constructMetadata({
  title: `Blogs | ${siteConfig.name}`,
  description: BLOG_DESCRIPTION,
});

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ tag?: string }>;
}) {
  const params = await searchParams;
  const selectedTag = params?.tag ?? "";

  const posts = blogSource.getPages().sort((a, b) => {
    const dateA = new Date(a.data?.publishedOn || 0).getTime();
    const dateB = new Date(b.data?.publishedOn || 0).getTime();
    return dateB - dateA;
  });

  const allTags = posts.flatMap((p) => normalizeTag(p.data?.tag));
  const tags = [...new Set(allTags)].filter(Boolean).sort();
  const filteredPosts = selectedTag
    ? posts.filter((p) => normalizeTag(p.data?.tag).includes(selectedTag))
    : posts;

  // Generate structured data
  const structuredData: WithContext<Blog> = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Blogs`,
    description: BLOG_DESCRIPTION,
    url: `${siteConfig.url}/blogs`,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon.png`,
      },
    },
    blogPost: filteredPosts.slice(0, 10).map((post) => ({
      "@type": "BlogPosting",
      headline: post.data?.title,
      description: post.data?.description,
      url: `${siteConfig.url}${post.url}`,
      datePublished: post.data?.publishedOn,
      dateModified: post.data?.publishedOn,
      author: {
        "@type": "Person",
        name: post.data?.author,
        url: siteConfig.links?.twitter,
      },
      image: post.data?.image ? [post.data?.image] : undefined,
      keywords:
        normalizeTag(post.data?.tag).length > 0
          ? normalizeTag(post.data?.tag)
          : undefined,
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div
        data-slot="blogs"
        className="flex relative items-stretch text-[1.05rem] sm:text-[15px] xl:w-full"
      >
        <div className="flex min-w-0 flex-1 border rounded-md flex-col">
          
          <main className="p-6 space-y-6">
            <div className="space-y-6 my-6 md:my-10 text-center px-6">
              <h2 className="font-extrabold tracking-tighter text-5xl md:text-7xl lg:text-9xl">
                Blogs
              </h2>
              <p className="text-muted-foreground font-light text-sm md:text-xl">
                Coming Soon!
              </p>
              {filteredPosts.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  {selectedTag
                    ? `${pluralize(filteredPosts.length, "article")} tagged with "${selectedTag}"`
                    : `${pluralize(filteredPosts.length, "article")} total`}
                </p>
              )}
            </div>

            {tags.length > 0 && (
              <nav className="">
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/blogs"
                    className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                      !selectedTag
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    All
                  </Link>
                  {tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blogs?tag=${encodeURIComponent(tag)}`}
                      className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                        selectedTag === tag
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </nav>
            )}

            {filteredPosts.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-lg text-muted-foreground">
                  {selectedTag
                    ? `No articles found for "${selectedTag}".`
                    : "No posts yet."}
                </p>
                {selectedTag && (
                  <Link
                    href="/blogs"
                    className="mt-4 inline-flex items-center text-primary hover:underline"
                  >
                    View all articles
                  </Link>
                )}
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <article
                    key={post.url}
                    className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-all duration-200 hover:bg-accent/5"
                  >
                    <Link href={post.url} className="flex flex-col h-full">
                      {post.data?.image && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.data.image}
                            alt={post.data?.title ?? post.url}
                            width={640}
                            height={360}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}

                      <div className="flex flex-col flex-1 p-6 space-y-4">
                        <div className="flex-1 space-y-2">
                          <h2 className="line-clamp-2 text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                            {post.data?.title ?? post.url}
                          </h2>
                          {post.data?.description && (
                            <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">
                              {post.data.description}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-2">
                            {post.data?.publishedOn && (
                              <time dateTime={post.data.publishedOn}>
                                {formatDate(post.data.publishedOn)}
                              </time>
                            )}
                            {post.data?.publishedOn && <span>·</span>}
                            <span>
                              {calculateReadingTime(post.data?.content ?? "")}{" "}
                              min read
                            </span>
                          </div>

                          {normalizeTag(post.data?.tag).length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {normalizeTag(post.data.tag).map((tag) => (
                                <Link
                                  key={tag}
                                  href={`/blogs?tag=${encodeURIComponent(tag)}`}
                                  className="rounded-md border px-2 py-1 text-xs transition-colors hover:bg-accent"
                                >
                                  {tag}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </main>
        </div>
        
      </div>
    </>
  );
}
