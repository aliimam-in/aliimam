
'use client';
import React from 'react';

export interface Abstract53SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract53Sketch = React.forwardRef<SVGSVGElement, Abstract53SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M233.055 126.162C209.661 131.064 172.341 174.065 170.001 193.004C168.553 204.59 181.587 202.25 180.696 199.354C177.577 189.884 215.342 145.435 234.726 135.631C261.24 122.263 268.593 177.519 246.646 226.09L243.75 232.552L237.177 232.774C185.598 234.557 143.042 299.282 191.613 302.067C209.772 303.069 228.933 290.369 245.309 266.418C252.773 255.501 253.219 256.058 251.548 275.219C247.76 321.117 247.76 320.56 255.447 319.78C268.258 318.554 275.611 258.174 264.693 243.135L261.351 238.567L265.362 228.43C288.645 170.612 271.935 118.03 233.055 126.162ZM236.509 246.254C218.239 277.67 189.163 303.404 186.712 290.258C183.592 273.659 217.347 241.352 239.182 240.907C239.405 240.795 238.18 243.358 236.509 246.254Z" />
    </svg>
  )
);

Abstract53Sketch.displayName = "Abstract53Sketch";

export const Abstract53SketchMetadata = {
  id: "abstract53_sketch",
  baseId: "abstract53",
  variant: "sketch",
  name: "Abstract53",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract53Sketch;
