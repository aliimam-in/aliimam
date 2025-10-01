import { Button } from "@/registry/default/ui/button";
import { Moon, Sun } from "@aliimam/icons";

export default function ButtonDemo() {
  return (
    <div className="flex gap-3 items-center">
      <Button>Default</Button>
      <Button size={'sm'} >sm</Button>
      <Button size={'md'} >md</Button>
      <Button size={'lg'} >lg</Button>
      <Button size={'xl'} >xl</Button>
      <Button size={'xxl'} >xxl</Button>
      <Button size={'icon'} ><Moon/></Button>
      <Button size={'iconxl'} ><Sun strokeWidth={2} className="w-6 size-full"/></Button>
    </div>
  );
}
