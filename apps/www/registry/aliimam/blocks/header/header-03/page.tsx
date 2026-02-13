import { Header } from "@/registry/aliimam/blocks/header/header-03/components/header"

export default function Header03() {
  return (
    <div className="flex min-h-screen w-full flex-col">
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
