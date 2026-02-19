import Link from "next/link"
import { getRegistryCategoriesWithCount } from "@/src/lib/categories"

export async function BlocksPageCategory() {
  const categories = await getRegistryCategoriesWithCount()

  return (
    <div className="container">
      <div className="relative flex items-center justify-center border-x border-t">
        <div className="w-full max-w-5xl p-6 lg:border-x">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            {categories.map((category) => {
              let href = ""

              switch (category.type) {
                case "block":
                  href = `/blocks/${category.slug}`
                  break
                case "page":
                  href = `/pages/${category.slug}`
                  break
                case "pattern":
                  href =
                    category.slug === "all"
                      ? "/patterns"
                      : `/patterns#${category.slug}`
                  break
                case "icon":
                  href = `/${category.slug}`
                  break
                default:
                  href = "/"
              }

              return (
                <Link key={category.slug} href={href} className="block">
                  <div className="hover:bg-muted flex w-full items-center justify-between border px-4 py-2 transition-colors">
                    <div>
                      <p className="font-medium">{category.name}</p>
                      <p className="text-muted-foreground text-xs capitalize">
                        {category.type}
                      </p>
                    </div>

                    <span className="text-sm font-semibold">
                      {category.count}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
