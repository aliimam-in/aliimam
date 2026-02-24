import { IconFilterProvider } from "@/src/components/icons/icon-filter-context"
import { LogoFilterProvider } from "@/src/components/icons/logo-filter-context"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <LogoFilterProvider>
        <IconFilterProvider>
          <div>{children}</div>
        </IconFilterProvider>
      </LogoFilterProvider>
    </div>
  )
}
