
'use client';
import React from 'react';

export interface Abstract52SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract52Sketch = React.forwardRef<SVGSVGElement, Abstract52SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M370.27 290.687C368.264 288.682 344.758 281.887 332.058 279.436C308.218 274.869 282.819 283.669 234.47 312.968C205.394 330.569 193.14 336.585 178.546 340.261C116.495 356.08 81.1799 329.122 97.5561 278.211L99.2271 272.975L104.797 278.433C136.324 309.068 193.585 296.592 214.306 254.371C240.263 201.678 155.82 186.081 105.02 234.096L101.455 237.549C102.012 231.422 98.7812 219.056 111.147 183.073C123.29 147.759 122.956 148.984 123.067 132.385C123.179 112.444 116.94 100.747 103.126 94.9543C80.6229 85.5965 74.2728 100.747 91.3174 101.081C113.264 101.527 116.049 127.037 98.0016 172.043C84.1877 206.467 81.0684 225.628 86.3043 243.898L88.9779 253.48L85.7473 258.38C45.4196 318.872 106.134 371.455 189.686 348.729C211.855 342.713 216.2 340.596 257.419 315.531C302.648 288.126 318.022 284.004 347.098 292.025C367.262 297.707 377.065 297.148 370.27 290.687ZM109.142 256.709C122.176 232.424 167.517 208.472 187.347 215.49C220.545 227.188 187.792 286.789 148.244 286.678C127.523 286.566 103.126 267.85 109.142 256.709Z" />
    </svg>
  )
);

Abstract52Sketch.displayName = "Abstract52Sketch";

export const Abstract52SketchMetadata = {
  id: "abstract52_sketch",
  baseId: "abstract52",
  variant: "sketch",
  name: "Abstract52",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract52Sketch;
