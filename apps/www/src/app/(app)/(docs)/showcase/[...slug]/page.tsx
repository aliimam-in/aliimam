 

import { ShowcaseCard } from "@/src/components/docs/showcase";
import { showcaseSource } from "@/src/lib/source";
import { absoluteUrl } from "@/src/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return showcaseSource.generateParams();
}

interface ShowcaseDoc {
  title: string;
  description: string;
  image?: string;
  affiliation?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface ShowcasePage {
  url: string;
  data: ShowcaseDoc;
}


interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getDocFromParams({ params }: PageProps): Promise<{ doc: ShowcaseDoc; page: ShowcasePage }> {
  const { slug } = await params;
  const page = showcaseSource.getPage(slug) as ShowcasePage | null;
  if (!page) notFound();

  const doc = page.data;
  if (!doc.title || !doc.description) {
    notFound();
  }

  return { doc, page };
}


export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { doc, page } = await getDocFromParams({ params });

  if (!page) {
    return {};
  }

  const url = process.env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/og`);
  ogUrl.searchParams.set("title", doc.title ?? "");
  ogUrl.searchParams.set("description", doc.description ?? "");

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
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [ogUrl.toString()],
    },
  };
}

export default async function PagePage({ params }: PageProps) {
  const { doc, page } = await getDocFromParams({ params });

  return (
    <article className="container py-40">
      <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        {doc.title}
      </h2>
      <h3 className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        {doc.title} uses Magic UI to build their landing page.
      </h3>
      <ShowcaseCard
        title={doc.title ?? ""}
        href={page.url}
        image={doc.image ?? ""}
        affiliation={doc.affiliation ?? ""}
      />
    </article>
  );
}