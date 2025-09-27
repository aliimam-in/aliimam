"use client"; 
import * as Icons from "@aliimam/icons";
import React from "react";

export default function About() {
  // Get all named exports from the icons module
  const iconComponents = Object.keys(Icons)
    .filter((key) => {
      const value = Icons[key as keyof typeof Icons];
      return typeof value === "function" || typeof value === "object";
    })
    .map((key) => ({
      name: key,
      // Let it accept all React.SVG props, not just size
      Component: Icons[key as keyof typeof Icons] as React.ComponentType<
        React.SVGProps<SVGSVGElement>
      >,
    }));
 

  return (
    <div className="h-full p-40 flex flex-col justify-center items-center pt-60">
      <div className="flex flex-wrap justify-center gap-20">
        {iconComponents.length > 0 ? (
          iconComponents.map(({ name, Component }) => (
            <div key={name} className="flex flex-col items-center">
              <Component strokeWidth={2} className="" />
              <p className="pt-2 text-xs">{name}</p>
            </div>
          ))
        ) : (
          <p>No icons found in @aliimam/logos</p>
        )}
      </div>
        
       <Icons.ArrowDown />
    </div>
  );
}
