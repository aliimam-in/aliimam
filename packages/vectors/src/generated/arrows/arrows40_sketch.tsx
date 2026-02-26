
'use client';
import React from 'react';

export interface Arrows40SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows40Sketch = React.forwardRef<SVGSVGElement, Arrows40SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M422.833 70.5861C394.833 81.0861 319.083 125.087 264.083 117.587C227.832 112.587 224.832 127.336 260.333 135.586C286.333 141.586 321.08 139.586 351.08 130.336C326.58 152.836 211.332 253.337 66.8318 393.587C37.8318 421.837 36.5815 427.337 47.8315 432.087C62.0815 437.837 74.581 436.085 84.831 426.835C85.081 426.585 391.83 145.086 394.83 148.336C395.33 148.836 393.833 155.587 391.833 163.837C377.583 219.587 382.83 251.585 406.08 249.336C417.08 248.336 424.583 232.836 430.583 199.086C433.083 185.086 440.833 153.836 447.833 129.336C465.333 67.0861 460.833 56.3361 422.833 70.5861Z" fill="currentColor"/>
    </svg>
  )
);

Arrows40Sketch.displayName = "Arrows40Sketch";

export const Arrows40SketchMetadata = {
  id: "arrows40_sketch",
  baseId: "arrows40",
  variant: "sketch",
  name: "Arrows40",
  category: "arrows",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Arrows40Sketch;
