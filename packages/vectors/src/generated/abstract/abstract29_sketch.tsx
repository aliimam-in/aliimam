
'use client';
import React from 'react';

export interface Abstract29SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract29Sketch = React.forwardRef<SVGSVGElement, Abstract29SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M175.892 156.515C131.22 159.968 101.81 175.008 88.7756 200.965C81.9801 214.556 90.6696 229.038 99.1362 218.343C129.772 179.687 148.376 171.777 210.65 171.554C294.424 171.332 346.115 193.612 343.553 228.815C341.436 257.78 310.801 271.594 242.288 274.379C204.968 275.938 210.427 293.763 271.03 288.973C332.858 284.182 358.815 268.697 358.815 236.502C358.704 183.809 278.271 148.605 175.892 156.515Z" />
    </svg>
  )
);

Abstract29Sketch.displayName = "Abstract29Sketch";

export const Abstract29SketchMetadata = {
  id: "abstract29_sketch",
  baseId: "abstract29",
  variant: "sketch",
  name: "Abstract29",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract29Sketch;
