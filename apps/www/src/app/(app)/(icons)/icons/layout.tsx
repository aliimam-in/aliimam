"use client"

import { Suspense } from "react"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Suspense
        fallback={
          <div className="text-muted-foreground flex h-[85vh] items-center justify-center p-4 text-sm">
            Loading icons...
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  )
}
