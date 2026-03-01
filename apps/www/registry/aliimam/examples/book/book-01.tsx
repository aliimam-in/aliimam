import { Book } from "@/registry/aliimam/components/book"
import { Apple } from "@aliimam/logos"

export default function BookDemo() {
  return (
    <div className="flex h-full items-center justify-center">
      <Book author="ALI" textColor="white"> 
        <div className="space-y-4 pl-3 text-white">
        <Apple/>
          <h1 className="pt-2 text-3xl leading-7 font-semibold">
            Learn <br /> Designs
          </h1>
          <p className="text-xs leading-3 opacity-70">
            A Practical Handbook for Visual Consistency & Creativity
          </p>
        </div>
      </Book>
    </div>
  )
}
