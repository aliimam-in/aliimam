
'use client';
import React from 'react';

export interface Abstract31SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract31Sketch = React.forwardRef<SVGSVGElement, Abstract31SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M199.017 129.166C180.97 136.519 136.185 203.359 123.931 235.22C113.682 261.511 137.522 257.948 148.44 247.253C154.233 241.46 161.14 232.103 170.275 218.288C193.892 182.862 193.224 182.415 185.649 228.758C182.975 245.692 180.97 257.948 180.078 266.86C177.628 291.369 191.218 311.867 219.292 282.457C239.344 261.736 270.091 233.217 268.977 237.227C268.308 239.678 250.93 303.621 250.484 305.626C246.251 318.994 287.47 326.124 287.47 314.984C287.47 312.979 295.936 285.576 306.408 253.938C337.378 160.136 329.357 139.859 279.226 184.197C246.251 213.385 222.856 232.323 222.856 229.872C222.856 228.758 223.97 222.52 225.084 215.836C239.121 141.865 231.323 116.021 199.017 129.166Z" fill="currentColor"/>
    </svg>
  )
);

Abstract31Sketch.displayName = "Abstract31Sketch";

export const Abstract31SketchMetadata = {
  id: "abstract31_sketch",
  baseId: "abstract31",
  variant: "sketch",
  name: "Abstract31",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract31Sketch;
