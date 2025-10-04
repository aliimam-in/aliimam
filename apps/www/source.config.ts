import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import rehypePrettyCode from "rehype-pretty-code";
import { z } from "zod";

import { transformers } from "@/src/lib/highlight-code";
import { remarkImage } from "fumadocs-core/mdx-plugins";

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [
      [
        remarkImage,
        {
          onError: "ignore",
        },
      ],
    ],
    rehypePlugins: (plugins) => {
      plugins.shift();
      plugins.push([
        // TODO: fix the type.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        rehypePrettyCode as any,
        {
          theme: {
            dark: "github-dark",
            light: "github-light-default",
          },
          transformers,
        },
      ]);

      return plugins;
    },
  },
});

export const docs = defineDocs({
  dir: "./src/content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      links: z
        .object({
          doc: z.string().optional(),
          api: z.string().optional(),
          shadcn: z.string().optional(),
        })
        .optional(),
    }),
  },
});

export const showcase = defineDocs({
  dir: "./src/content/showcase",
  docs: {
    schema: frontmatterSchema.extend({
      affiliation: z.string().optional(),
      featured: z.boolean().optional().default(false),
      image: z.string().optional(),
    }),
  },
});

export const blogs = defineDocs({
  dir: "./src/content/blogs",
  docs: {
    schema: frontmatterSchema.extend({
      tag: z.array(z.string()).optional(),
      publishedOn: z.string(),
      featured: z.boolean().optional().default(false),
      image: z.string().optional(),
      author: z.string().optional(),
    }),
  },
});
