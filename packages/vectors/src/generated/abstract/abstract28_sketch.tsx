
'use client';
import React from 'react';

export interface Abstract28SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract28Sketch = React.forwardRef<SVGSVGElement, Abstract28SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M211.912 71.6235C159.653 75.877 109.825 102.411 89.9753 137.047C60.2005 188.494 62.6315 369.777 92.8114 373.626C100.103 374.638 100.508 371.398 102.331 309.822C104.154 247.437 101.724 253.919 121.776 258.982C193.884 277.212 314.198 255.539 352.885 217.257C419.321 151.226 333.037 61.9011 211.912 71.6235ZM275.308 93.7021C354.302 110.109 368.684 188.495 298.804 221.916C196.922 270.528 104.964 235.284 104.762 235.284C114.484 183.836 105.977 144.947 161.678 111.932C198.948 89.6511 231.355 84.3848 275.308 93.7021Z" fill="currentColor"/>
    </svg>
  )
);

Abstract28Sketch.displayName = "Abstract28Sketch";

export const Abstract28SketchMetadata = {
  id: "abstract28_sketch",
  baseId: "abstract28",
  variant: "sketch",
  name: "Abstract28",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract28Sketch;
