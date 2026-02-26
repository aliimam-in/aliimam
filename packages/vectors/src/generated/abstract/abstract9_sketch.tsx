
'use client';
import React from 'react';

export interface Abstract9SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract9Sketch = React.forwardRef<SVGSVGElement, Abstract9SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M275.443 192.814C266.085 181.228 255.39 167.638 251.825 162.291C239.348 144.244 221.524 136.222 207.042 142.461C201.249 144.911 166.937 193.929 155.128 216.878C152.9 221.112 153.346 226.236 156.465 229.801C166.046 241.61 177.854 256.315 192.336 277.704C221.301 320.037 244.473 302.435 242.913 294.414C242.245 291.295 243.136 287.728 244.918 286.391C248.929 283.272 285.023 223.115 289.479 219.55C293.936 215.54 293.49 215.094 275.443 192.814ZM225.089 264.556L184.093 223.117C188.326 217.324 192.782 211.53 205.705 191.478C219.518 170.088 218.627 170.534 225.98 181.451C232.664 191.7 248.038 207.743 256.282 216.878C236.897 243.392 234.669 245.841 225.089 264.556Z" />
    </svg>
  )
);

Abstract9Sketch.displayName = "Abstract9Sketch";

export const Abstract9SketchMetadata = {
  id: "abstract9_sketch",
  baseId: "abstract9",
  variant: "sketch",
  name: "Abstract9",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract9Sketch;
