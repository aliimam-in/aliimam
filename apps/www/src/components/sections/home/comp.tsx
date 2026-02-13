"use client"

import Link from "next/link"
import { Badge } from "@/registry/aliimam/ui/badge"
import { source } from "@/src/lib/source"

export function Comps({
    tree,
}: {
    tree: typeof source.pageTree
}) {
    return (
        <div>
            <div className="no-scrollbar py-3">
                {tree.children.map((group) => (
                    <div key={group.$id} className="flex justify-center flex-wrap gap-2">
                        {group.type === "folder" &&
                            group.children.map((item) => { 
                                if (
                                    item.type !== "page" ||
                                    !item.url.includes("/components/")
                                ) {
                                    return null
                                }

                                return (
                                    <Link key={item.url} href={item.url} className="block">
                                        <Badge className="hover:bg-foreground hover:text-background duration-200" variant="secondary">{item.name}</Badge>
                                    </Link>
                                )
                            })}
                    </div>
                ))}
            </div>
        </div>
    )
}
