import { Header } from "@/registry/default/blocks/header/header-01/components/header";

export default function Header01() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">
      <Header /> 
      <main className="flex-1">
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Hero</h1>
        </section> 

        <section className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Section</h1>
        </section>
      </main>
    </div>
  );
}
