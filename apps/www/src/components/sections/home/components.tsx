
import { source } from "@/src/lib/source"

import { Comps } from "./comp"

export function Components() {
  const pageTree = source.pageTree
  return (
    <div className="md:container">
      <div className="relative flex h-full items-center justify-center overflow-hidden border-t md:border-x">
        <Comps tree={pageTree} />
      </div>
    </div>
  )
}
