"use client";
import * as Icons from "@aliimam/icons";
import React, { useState } from "react";

export default function About() {
  const iconComponents = Object.keys(Icons)
    .filter((key) => {
      const value = Icons[key as keyof typeof Icons];
      return typeof value === "function" || typeof value === "object";
    })
    .map((key) => ({
      name: key,
      Component: Icons[key as keyof typeof Icons] as React.ComponentType<{
        size?: number;
      }>,
    }));

  return (
    <div className="h-screen flex flex-col justify-center items-center p-4">
      <div className="grid grid-cols-4 gap-4">
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
