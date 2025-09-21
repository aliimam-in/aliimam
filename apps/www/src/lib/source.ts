import { docs, showcase } from "@/.source"
import { loader } from "fumadocs-core/source"

export const source: ReturnType<typeof loader> = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
})
 
export const showcaseSource = loader({
  baseUrl: "/showcase",
  source: showcase.toFumadocsSource(),
});