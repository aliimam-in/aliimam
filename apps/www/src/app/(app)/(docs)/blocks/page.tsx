import { BlockDisplay } from "@/src/components/docs/blocks/block-display";

const FEATURED_BLOCKS = [ 
  "logos-01", 
  "login-01",
  "connect-01",
  "pricing-01",
  "call-to-action-02",
];

export default function BlocksPage() {
  return (
    <div
      data-slot="blocks"
      className="flex relative pt-3 items-stretch text-[1.05rem] sm:text-[15px] xl:w-full"
    >
      <div className="flex min-w-0 py-6 flex-1 flex-col"> 
        <div className="px-6 flex flex-1 gap-10 pb-10 md:gap-20 min-w-0 flex-col"> 
          {FEATURED_BLOCKS.map((name) => (
            <BlockDisplay name={name} key={name} />
          ))}
        </div>
      </div>
    </div>
  );
}
