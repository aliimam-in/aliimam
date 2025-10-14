import { Suspense } from "react";
import { Loader } from "lucide-react";
import { Header } from "@/src/components/layout/header"; 

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header /> 
      <Suspense
        fallback={
          <div className="flex items-center h-screen justify-center">
            <Loader strokeWidth={0.5} className="h-10 w-10 animate-spin" />
          </div>
        }
      >
        <main className="grow">{children}</main>
      </Suspense> 
    </div>
  );
}
