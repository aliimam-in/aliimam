import { blogs, docs, showcase } from "@/.source"
import { loader } from "fumadocs-core/source"

export const source: ReturnType<typeof loader> = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
})

export const blogSource: ReturnType<typeof loader> = loader({
  baseUrl: "/blogs",
  source: blogs.toFumadocsSource(),
});
 
export const showcaseSource: ReturnType<typeof loader> = loader({
  baseUrl: "/showcase",
  source: showcase.toFumadocsSource(),
});