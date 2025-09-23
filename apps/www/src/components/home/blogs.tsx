import { formatDate, normalizeTag } from "@/src/lib/utils";
import { BlogPosts } from "../docs/blogs/blog-home-card";
import { blogSource } from "@/src/lib/source";
import Link from "next/link";
import { Button } from "@/registry/default/ui/button";

type BlogPost = {
  url: string;
  title: string;
  description: string;
  date: string;
  tag: string[];
  image?: string;
  alt?: string;
};
export async function Blogs() {
  const posts = blogSource.getPages().sort((a, b) => {
    const dateA = new Date(a.data?.publishedOn || 0).getTime();
    const dateB = new Date(b.data?.publishedOn || 0).getTime();
    return dateB - dateA;
  });

  const blogPosts: BlogPost[] = posts.map((post) => ({
    url: post.url,
    title: post.data?.title ?? post.url,
    description: post.data?.description ?? "",
    date: post.data?.publishedOn ? formatDate(post.data.publishedOn) : "",
    //@ts-ignore
    tag: post.data?.tags ? post.data.tags.map(normalizeTag) : [],
    image: post.data?.image,
    alt: post.data?.title ?? post.url,
  }));

  return (
    <section className="container">
      <div className="border-x border-t p-20">
        <BlogPosts posts={blogPosts} />
        <Link className="flex justify-center mt-20" href="/blogs">
          <Button className="h-14 cursor-pointer rounded-full px-10">
            See All Blogs
          </Button>
        </Link>
      </div>
    </section>
  );
}
