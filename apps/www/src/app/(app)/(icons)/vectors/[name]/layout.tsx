"use client"

import { IconsNav } from "@/src/components/icons/icons-nav"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="bg-background sticky top-14 z-40 flex h-14 w-full items-center gap-2 border-b px-4">
        <IconsNav />
      </div>
      <div>{children}</div>
    </div>
  )
}
