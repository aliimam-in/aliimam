
'use client';
import React from 'react';

export interface Arrows65SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows65Sketch = React.forwardRef<SVGSVGElement, Arrows65SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 500 500"
      
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_628_770)">
<path fillRule="evenodd" clipRule="evenodd" d="M298.402 97.2214C303.652 101.471 321.902 147.221 307.152 152.471C266.402 167.221 189.153 223.471 192.903 235.721C194.903 241.971 198.653 245.971 202.653 248.721C211.403 254.22 222.653 253.72 230.653 246.971C292.402 195.721 293.902 195.471 324.152 174.721C325.152 177.471 329.152 186.971 329.152 189.971C329.152 252.47 368.902 260.22 404.652 204.971C421.902 178.471 455.152 145.471 491.152 119.971C507.902 107.971 497.902 101.721 467.402 104.721C434.652 107.971 387.402 103.971 352.902 94.7214C304.402 81.9714 286.902 88.2214 298.402 97.2214ZM153.652 272.97C115.902 346.97 180.153 437.47 247.653 405.47C291.402 384.72 301.152 339.223 268.402 308.473C250.652 291.973 198.903 273.973 198.903 284.723C198.903 294.723 216.653 305.97 243.153 312.72C281.152 322.47 249.402 384.473 204.902 387.223C174.652 389.223 165.652 352.22 182.152 293.97C186.402 279.22 184.403 272.97 173.903 266.97C163.153 260.22 159.402 261.47 153.652 272.97ZM83.1532 286.22C33.1532 311.97 -13.0978 369.72 3.40225 385.72C18.1522 399.97 23.4027 398.22 43.9027 372.47C60.6527 351.47 98.6527 314.97 113.903 305.22C136.403 290.97 108.153 273.47 83.1532 286.22Z" />
</g>
<defs>
<clipPath id="clip0_628_770">
<rect width="500" height="500" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

Arrows65Sketch.displayName = "Arrows65Sketch";

export const Arrows65SketchMetadata = {
  id: "arrows65_sketch",
  baseId: "arrows65",
  variant: "sketch",
  name: "Arrows65",
  category: "arrows",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Arrows65Sketch;
