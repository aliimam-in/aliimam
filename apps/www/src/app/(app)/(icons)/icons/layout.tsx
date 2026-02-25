"use client"
import { Suspense } from "react"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div><Suspense fallback={<div>Loading icons...</div>}>{children}</Suspense></div>
}
