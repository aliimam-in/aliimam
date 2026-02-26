
'use client';
import React from 'react';

export interface Abstract30SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract30Sketch = React.forwardRef<SVGSVGElement, Abstract30SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 446 446"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M198.227 135.679C198.784 135.679 202.461 138.354 206.36 141.696C217.5 151.165 227.192 154.619 227.192 149.16C227.192 141.919 196.668 124.54 193.326 129.999C192.546 131.224 196.334 135.679 198.227 135.679Z" fill="currentColor"/>
<path d="M188.09 178.792C194.663 177.121 203.24 175.45 207.362 175.116C216.386 174.225 218.281 173.222 216.61 170.548C213.379 165.201 201.681 163.307 186.864 165.869C149.656 172.108 164.584 184.696 188.09 178.792Z" fill="currentColor"/>
<path d="M234.88 112.173C230.981 106.715 223.405 103.818 222.069 107.383C220.732 110.837 227.526 130.332 231.314 134.12C239.781 142.586 243.012 123.425 234.88 112.173Z" fill="currentColor"/>
<path d="M218.503 312.475C214.269 319.939 228.083 339.546 237.552 339.546C243.345 339.546 243.234 337.542 237.441 327.181C229.086 312.365 221.733 306.682 218.503 312.475Z" fill="currentColor"/>
<path d="M241.229 288.746C232.205 285.627 228.417 285.404 227.526 287.855C225.744 292.534 257.048 305.345 260.39 301.335C262.841 298.438 255.377 293.537 241.229 288.746Z" fill="currentColor"/>
<path d="M246.687 244.742C220.062 255.994 222.179 283.957 255.822 256.329C264.289 249.534 257.048 240.398 246.687 244.742Z" fill="currentColor"/>
<path d="M239.112 209.428C280.888 164.31 289.355 140.248 273.87 109.835C268.857 99.92 261.058 99.1396 262.172 108.609C267.52 153.949 255.6 163.307 205.691 217.783C174.833 251.315 161.799 284.18 169.374 309.023C176.058 330.969 191.432 347.678 200.455 342.888C203.463 341.217 203.463 341.44 197.67 332.862C174.387 298.773 184.636 268.36 239.112 209.428Z" fill="currentColor"/>
    </svg>
  )
);

Abstract30Sketch.displayName = "Abstract30Sketch";

export const Abstract30SketchMetadata = {
  id: "abstract30_sketch",
  baseId: "abstract30",
  variant: "sketch",
  name: "Abstract30",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract30Sketch;
