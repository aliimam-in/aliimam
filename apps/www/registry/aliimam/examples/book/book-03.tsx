import { Book } from "@/registry/aliimam/components/book"
import { Vercel } from "@aliimam/logos"

export default function BookDemo() {
  return (
    <div className="flex h-full items-center justify-center">
      <Book
        author="ALi"
        variant="notebook"
        color="white"
        depth={4}
        pages={200}
        height={204}
        width={300}
        orientation="landscape"
        textColor="black"
      >
        <div className="-mt-4 space-y-2 text-center text-black">
          <div className="flex justify-center">
            <Vercel/>
          </div>
          <h1 className="pt-2 text-3xl leading-8 font-bold tracking-tighter">
            Designs <br /> Without Limits
          </h1>
          <p className="mt-2 px-10 text-xs leading-3 opacity-70">
            A Practical Handbook for Visual Consistency & Creativity
          </p>
        </div>
      </Book>
    </div>
  )
}
