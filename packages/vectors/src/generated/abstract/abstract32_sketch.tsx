
'use client';
import React from 'react';

export interface Abstract32SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract32Sketch = React.forwardRef<SVGSVGElement, Abstract32SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 446 446"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M351.364 219.178C342.006 211.825 322.622 216.281 302.124 230.318L292.543 236.779C292.989 233.66 294.994 212.716 296.331 203.581C298.782 187.539 275.833 187.541 250.656 203.805L234.391 214.276C234.837 211.602 236.396 198.235 239.738 185.535C244.417 167.488 225.256 160.581 200.748 171.499C191.835 175.509 183.591 179.297 182.255 179.965C180.472 180.633 179.358 175.731 178.912 165.037C177.798 146.098 175.793 140.974 157.078 144.984C137.471 149.217 92.4641 177.958 92.4641 186.425C92.4641 198.902 117.864 201.577 133.015 190.659L143.932 182.861C143.487 185.312 141.481 198.457 138.585 204.027C131.455 218.064 157.077 223.634 180.249 213.162C201.416 203.581 200.97 202.691 195.4 225.193C192.058 238.785 192.504 274.658 245.308 238.341C250.433 234.776 254.889 232.546 254.889 233.437C254.889 234.551 253.329 242.574 251.547 251.709C245.531 280.674 261.35 284.462 296.776 262.85C304.574 258.171 311.259 254.158 311.927 254.158C312.595 254.158 312.373 262.848 311.481 273.097C309.476 299.833 322.622 310.528 340.223 296.491C349.581 288.916 358.716 224.971 351.364 219.178Z" />
    </svg>
  )
);

Abstract32Sketch.displayName = "Abstract32Sketch";

export const Abstract32SketchMetadata = {
  id: "abstract32_sketch",
  baseId: "abstract32",
  variant: "sketch",
  name: "Abstract32",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract32Sketch;
