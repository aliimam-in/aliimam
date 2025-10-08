import { Book } from "@/registry/default/components/book";

export default function Component() {
  return (
    <div className="flex h-full items-center justify-center">
      <Book author="Ali" textColor="white">
        <div className="space-y-2 pl-3 text-white">
          <a href="#" aria-label="home" className="flex gap-2 items-center">
            <img
              src="/ai-logo-white.png"
              alt="Your Image"
              height={50}
              width={50}
              className="h-10 z-10 w-full object-contain"
            /> 
          </a>
          <h1 className="pt-2 text-3xl leading-7 font-semibold">
            Learn <br /> Designs
          </h1>
          <p className="text-xs leading-3 opacity-70">
            A Practical Handbook for Visual Consistency & Creativity
          </p>
        </div>
      </Book>
    </div>
  );
}
