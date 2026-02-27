import { IconFilterProvider } from "@/src/components/icons/icons/icon-filter-context"
import { LogoFilterProvider } from "@/src/components/icons/logos/logo-filter-context"
import { VectorFilterProvider } from "@/src/components/icons/vectors/vector-filter-context"
 
 

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <VectorFilterProvider>
        <LogoFilterProvider>
          <IconFilterProvider>  
            <div>{children}</div>
          </IconFilterProvider>
        </LogoFilterProvider>
      </VectorFilterProvider>
    </div>
  )
}
