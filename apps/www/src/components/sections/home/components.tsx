
 

import { source } from "@/src/lib/source" 
import { Comps } from "./comp"
 
export function Components() {
  const pageTree = source.pageTree
  return (
    <div className="md:container">
      <div className="relative border-t md:border-x h-full flex justify-center items-center overflow-hidden">
        <Comps
          tree={pageTree} 
        />
      </div> 
    </div>
  )
}
