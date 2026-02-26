
'use client';
import React from 'react';

export interface Arrows47SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows47Sketch = React.forwardRef<SVGSVGElement, Arrows47SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 500 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M402.028 58.7852C380.028 62.3852 252.226 83.785 240.226 85.585C208.626 90.185 207.226 94.9854 232.826 108.985C280.826 135.385 291.026 144.585 291.426 144.785C216.426 200.986 163.027 242.586 59.6268 337.986C26.2268 368.786 24.627 370.986 33.827 374.386C41.827 377.186 49.0264 372.786 78.2264 346.386C153.826 277.986 295.426 163.785 320.826 150.785C332.426 144.785 326.826 139.186 282.426 112.386C271.826 105.986 263.226 100.185 263.226 99.585C263.226 96.785 446.226 67.9858 446.626 68.3858C446.826 68.5858 444.426 79.7856 441.226 93.1856C428.426 146.986 424.826 189.186 422.226 242.386C374.426 182.186 379.026 177.985 306.226 247.586C250.826 300.586 145.626 398.186 121.226 423.186C91.6264 453.386 117.827 463.986 174.427 408.386C195.227 387.986 337.028 252.986 348.028 241.786C370.628 218.786 370.628 218.986 378.028 228.986C389.628 244.786 404.626 259.386 416.826 267.786C437.026 281.586 442.026 275.786 443.426 252.186C445.426 218.786 447.226 214.986 467.826 98.7852C477.426 45.5852 473.028 46.7852 402.028 58.7852Z" fill="currentColor"/>
    </svg>
  )
);

Arrows47Sketch.displayName = "Arrows47Sketch";

export const Arrows47SketchMetadata = {
  id: "arrows47_sketch",
  baseId: "arrows47",
  variant: "sketch",
  name: "Arrows47",
  category: "arrows",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Arrows47Sketch;
