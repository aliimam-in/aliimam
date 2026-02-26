
'use client';
import React from 'react';

export interface Abstract47SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract47Sketch = React.forwardRef<SVGSVGElement, Abstract47SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M221.739 157.07C151.333 180.353 138.41 288.97 205.808 291.31C237.669 292.424 283.122 263.793 284.459 240.065C285.016 230.595 270.533 231.264 267.303 240.956C257.722 269.252 211.49 291.978 194.78 277.607C166.706 253.544 177.735 197.954 216.057 170.995C253.154 144.927 280.002 195.504 247.696 230.818C222.519 258.335 198.01 230.15 219.734 198.623C227.532 187.371 236.667 186.48 246.025 196.061C250.481 200.628 256.051 198.734 254.825 192.718C252.152 178.682 221.516 179.016 206.811 193.387C175.841 223.577 203.469 263.793 244.911 248.754C303.843 227.365 281.005 137.463 221.739 157.07Z" fill="currentColor"/>
    </svg>
  )
);

Abstract47Sketch.displayName = "Abstract47Sketch";

export const Abstract47SketchMetadata = {
  id: "abstract47_sketch",
  baseId: "abstract47",
  variant: "sketch",
  name: "Abstract47",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract47Sketch;
