/**
 * Auto-generated logo component: Abstract68 (sketch)
 * Category: abstract
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Abstract68SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract68Sketch = React.forwardRef<SVGSVGElement, Abstract68SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 446 446"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M372.732 117.457C394.233 152.437 335.189 237.215 280.379 250.027C272.246 251.92 272.247 251.474 280.713 241.559C307.673 209.698 320.707 179.397 313.354 165.694C304.108 148.65 278.596 149.095 261.997 166.474C234.592 195.216 227.128 228.971 243.95 247.686L247.961 252.143L239.828 259.607C218.884 278.768 188.471 294.699 172.318 294.699H168.642C194.376 263.952 240.497 204.796 204.625 186.749C160.286 164.468 104.919 255.15 140.568 291.468L145.581 296.593C145.47 296.704 86.649 345.721 68.4903 320.321C57.7956 305.393 63.5884 270.858 81.1901 243.564L84.6437 238.217C85.5349 236.769 85.2008 234.987 83.864 233.984C70.8298 224.849 44.9842 276.986 49.5518 303.054C56.6816 343.939 104.362 347.616 150.706 310.741L159.507 303.834L165.634 304.948C191.591 309.738 227.685 295.145 255.759 268.408C263.891 260.61 264.226 260.498 268.013 261.501C326.946 277.432 423.309 163.021 388.774 117.791C383.093 110.55 363.709 102.863 372.732 117.457ZM298.203 166.808C299.652 181.513 286.952 206.245 264.448 233.093C255.759 243.454 255.313 243.565 253.419 235.544C248.406 214.489 271.578 172.267 292.299 164.803C297.869 162.798 297.758 162.798 298.203 166.808ZM201.06 196.218C207.299 212.483 182.456 261.278 155.05 286.79L152.265 289.352L149.035 282.89C141.682 267.851 144.913 244.567 157.056 226.297C171.427 204.573 197.495 186.749 201.06 196.218Z" />
    </svg>
  )
);

Abstract68Sketch.displayName = "Abstract68Sketch";

export const Abstract68SketchMetadata = {
  id: "abstract68_sketch",
  baseId: "abstract68",
  variant: "sketch",
  name: "Abstract68",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract68Sketch;
