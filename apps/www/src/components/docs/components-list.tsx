import Link from "next/link"
import { source } from "@/src/lib/source"

export function ComponentsList() {
  const components = source.pageTree.children.find(
    (page) => page.$id === "components"
  )

  const shaders = source.pageTree.children.find(
    (page) => page.$id === "shaders"
  )

  const componentList =
    components?.type === "folder"
      ? components.children.filter((c) => c.type === "page")
      : []

  const shaderList =
    shaders?.type === "folder"
      ? shaders.children.filter((s) => s.type === "page")
      : []

  const list = [ ...shaderList, ...componentList]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:gap-x-16 lg:gap-y-6 xl:gap-x-20">
      {list.map((item) => (
        <Link
          key={item.$id}
          href={item.url}
          className="text-lg font-medium underline-offset-4 hover:underline md:text-base"
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}