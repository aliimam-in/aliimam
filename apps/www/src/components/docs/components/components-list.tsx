import Image from "next/image"
import Link from "next/link"
import { source } from "@/src/lib/source"

export function ComponentsList() {
  const components = source.pageTree.children.find(
    (page) => page.$id === "ui"
  )

  if (components?.type !== "folder") {
    return
  }

  const list = components.children.filter(
    (component) => component.type === "page"
  )

  return (
    <div className="grid grid-cols-1 gap-3 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
      {list.map((component) => (
        <Link
          key={component.$id}
          href={component.url}
          className="flex flex-col gap-2"
        >
          {/* <ImageComponent imageBasePath={slugify(name)} alt={name} /> */}
          <span className="text-primary/60 hover:text-primary text-lg font-medium underline-offset-4 md:text-base">
            {component.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

type ImageComponentProps = {
  imageBasePath: string
  alt: string
}

export function ImageComponent({ imageBasePath, alt }: ImageComponentProps) {
  return (
    <>
      <Image
        className="w-full rounded-xl border hover:shadow-md dark:hidden"
        src={`/thumbs/${imageBasePath}.jpg`}
        alt={alt}
        width={268}
        height={198}
      />
      <Image
        className="hidden w-full rounded-xl border hover:shadow-md dark:block"
        src={`/thumbs/${imageBasePath}-dark.jpg`}
        alt={`${alt} dark`}
        width={268}
        height={198}
      />
    </>
  )
}

// helper to keep file names consistent
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-")
}
