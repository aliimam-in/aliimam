import { Header } from "@/registry/aliimam/blocks/header/header-01/components/header"

export default function Header01() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden">
      <Header />
      <main className="flex-1">
        <section className="flex h-screen items-center justify-center">
          <h1 className="text-4xl font-bold">Hero</h1>
        </section>

        <section className="flex h-screen items-center justify-center">
          <h1 className="text-4xl font-bold">Section</h1>
        </section>
      </main>
    </div>
  )
}
