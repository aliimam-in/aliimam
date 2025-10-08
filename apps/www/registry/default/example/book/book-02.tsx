import { Book } from "@/registry/default/components/book";

export default function Component() {
  return (
    <div className="flex h-full items-center justify-center">
      <Book depth={8} color="#fff200" variant="notebook" textColor="black">
        <div className="mt-8 space-y-2 text-center text-black">
          <div className="flex justify-center">
           <a href="#" aria-label="home" className="flex gap-2 items-center">
            
            <img
              src="/ai-logo-black.png"
              alt="Your Image"
              height={50}
              width={50}
              className="h-10 z-10 w-full object-contain"
            />
          </a>
          </div>
          <h1 className="pt-2 text-2xl leading-6 font-bold tracking-tighter">
            Designs <br /> That Gives
          </h1>
          <p className="mt-2 text-xs leading-3 opacity-70">
            A Practical Handbook for Visual Consistency & Creativity
          </p>
        </div>
      </Book>
    </div>
  )
}
