
'use client';
import React from 'react';

export interface Abstract49SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract49Sketch = React.forwardRef<SVGSVGElement, Abstract49SketchProps>(
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
      <path d="M300.263 179.446C329.785 190.475 240.44 219.661 210.25 228.351C153.992 244.615 166.246 247.847 186.855 242.166C194.208 240.16 215.82 234.479 234.758 229.577C292.354 214.649 307.727 208.967 317.865 199.386C340.814 177.662 275.532 152.597 218.048 160.952C141.849 172.092 35.7941 213.758 12.3996 231.248C1.14795 239.715 2.81882 245.729 35.9054 231.693C154.994 180.782 252.249 161.51 300.263 179.446Z" />
<path d="M430.381 187.466C423.363 190.14 409.103 195.932 393.507 202.728C237.989 270.461 115.781 297.421 122.242 263.109C125.138 247.402 166.58 214.426 196.102 204.066C206.462 200.39 199.555 196.489 190.42 198.606C172.262 202.839 133.716 223.673 119.791 238.489C101.41 258.208 105.532 276.032 130.263 283.942C158.225 292.854 250.243 275.697 311.069 250.074C327.78 243.056 412.223 203.509 434.615 192.369C446.423 186.687 435.84 185.461 430.381 187.466Z" />
    </svg>
  )
);

Abstract49Sketch.displayName = "Abstract49Sketch";

export const Abstract49SketchMetadata = {
  id: "abstract49_sketch",
  baseId: "abstract49",
  variant: "sketch",
  name: "Abstract49",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract49Sketch;
