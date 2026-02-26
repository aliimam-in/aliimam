
'use client';
import React from 'react';

export interface Abstract3SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract3Sketch = React.forwardRef<SVGSVGElement, Abstract3SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M208.545 92.8254C149.502 101.292 111.403 141.174 111.403 194.202C111.403 221.829 119.869 241.659 139.699 259.706L152.398 271.292L146.828 275.748C128.558 290.007 130.564 324.096 150.393 339.247C198.742 376.233 288.978 337.688 260.905 292.235C256.449 285.106 256.449 284.66 260.459 283.323C384.339 242.773 338.664 73.8869 208.545 92.8254ZM305.688 185.066C306.803 223.834 280.512 263.271 231.94 271.069C212.556 274.188 210.996 277.753 223.473 289.339C244.417 308.946 228.821 339.693 199.188 337.242C168.218 334.568 155.964 298.251 180.918 282.209C191.167 275.525 191.612 271.515 182.255 267.727C165.321 260.597 146.16 228.068 143.264 202.222C131.678 89.4826 302.792 70.7666 305.688 185.066Z" fill="currentColor"/>
    </svg>
  )
);

Abstract3Sketch.displayName = "Abstract3Sketch";

export const Abstract3SketchMetadata = {
  id: "abstract3_sketch",
  baseId: "abstract3",
  variant: "sketch",
  name: "Abstract3",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract3Sketch;
