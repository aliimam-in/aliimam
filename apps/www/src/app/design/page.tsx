import { Canvas } from "@/src/components/design/canvas";
import { LayersPanel } from "@/src/components/design/layers-panel";
import { PropertiesPanel } from "@/src/components/design/properties-panel";
import { Toolbar } from "@/src/components/design/toolbar";
import { CustomIcon } from "./test";

export default function About() {
  return (
    <div className="flex pt-18 h-screen flex-col">
      
      <Toolbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="grid w-80 border-r">
          <div className="">
            <h1 className="font-semibold border-b p-3 text-xs">Templates</h1>
            <p className="p-3">
              Coming Soon!
            </p>
          </div>
          <LayersPanel />
        </div>
        <Canvas />
        <PropertiesPanel />
      </div>
    </div>
  );
}
