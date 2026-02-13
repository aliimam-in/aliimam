import { cn } from "@/src/lib/utils"

function SectionHeader({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("border-grid", className)} {...props}>
      <div className="container-wrapper">
        <div className="container flex flex-col items-center gap-2 py-8 text-center md:py-16 lg:py-20 xl:gap-4">
          {children}
        </div>
      </div>
    </section>
  )
}

function SectionHeaderHeading({
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-3xl font-medium tracking-tighter uppercase xl:text-5xl",
        className
      )}
      {...props}
    />
  )
}

function SectionHeaderDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-muted-foreground xl:text-md max-w-3xl text-sm",
        className
      )}
      {...props}
    />
  )
}

function SectionActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center gap-2 pt-2 **:data-[slot=button]:shadow-none",
        className
      )}
      {...props}
    />
  )
}

export {
  SectionActions,
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderHeading,
}
