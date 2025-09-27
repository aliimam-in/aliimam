"use client"
import * as Icons from "@aliimam/logos";
import React from "react";

import { AiBlack } from "@aliimam/logos";

export default function About() { 

  // Get all named exports from the icons module
  const iconComponents = Object.keys(Icons)
    .filter((key) => {
      const value = Icons[key as keyof typeof Icons];
      return typeof value === "function" || (typeof value === "object");
    })
    .map((key) => ({
      name: key,
      Component: Icons[key as keyof typeof Icons] as React.ComponentType<{ size?: number }>,
    }));

  return (
    <div className="h-full pt-40 flex flex-col justify-center items-center p-4">
       <AiBlack/>
      <div className="flex flex-wrap justify-center gap-20">
        {iconComponents.length > 0 ? (
          iconComponents.map(({ name, Component }) => (
            <div key={name} className="flex flex-col items-center">
              <Component size={40} />
              
            </div>
          ))
        ) : (
          <p>No icons found in @aliimam/icons</p>
        )}
      </div>
    </div>
  );
}