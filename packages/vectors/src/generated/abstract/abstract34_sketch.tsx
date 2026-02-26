
'use client';
import React from 'react';

export interface Abstract34SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract34Sketch = React.forwardRef<SVGSVGElement, Abstract34SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M227.363 87.795C216.669 94.2563 198.287 134.472 177.678 195.966C168.877 222.145 164.978 234.845 154.172 271.163C143.143 308.482 147.154 331.766 167.429 347.473C199.847 372.539 232.822 357.945 265.352 302.912C267.357 299.459 271.924 291.995 275.489 286.202C304.231 238.744 304.9 177.14 276.938 120.436C272.481 111.413 265.575 103.502 262.01 103.502C258.668 103.502 258.668 103.948 262.232 110.186C280.614 142.493 287.298 203.207 276.492 239.97C267.468 270.494 237.278 319.847 216.669 337.782C196.728 355.161 181.243 353.823 168.654 333.548C155.286 312.047 160.411 303.135 189.821 200.979C196.505 177.696 216.335 122.553 222.573 110.075C229.369 96.4843 237.501 90.246 244.297 93.0311C249.31 95.0363 252.54 94.3677 250.312 91.694C245.522 85.9011 233.602 83.8959 227.363 87.795Z" />
    </svg>
  )
);

Abstract34Sketch.displayName = "Abstract34Sketch";

export const Abstract34SketchMetadata = {
  id: "abstract34_sketch",
  baseId: "abstract34",
  variant: "sketch",
  name: "Abstract34",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract34Sketch;
