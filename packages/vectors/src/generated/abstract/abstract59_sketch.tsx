
'use client';
import React from 'react';

export interface Abstract59SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract59Sketch = React.forwardRef<SVGSVGElement, Abstract59SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M211.631 98.9089C155.93 104.702 144.233 110.607 146.127 132.219C147.352 146.813 149.023 279.159 153.368 328.956C155.707 355.582 167.182 351.015 176.651 336.533C182.221 328.066 216.756 275.706 223.329 265.457C246.389 293.419 277.805 334.638 282.818 338.983C298.303 352.351 298.303 334.304 298.637 327.508C300.308 296.761 300.42 223.124 298.192 188.7C296.298 157.842 295.184 123.195 294.181 120.633C293.736 119.518 294.293 117.18 295.295 115.174C301.868 102.252 258.644 94.0072 211.631 98.9089ZM280.813 114.394C282.038 119.519 284.266 314.474 283.041 314.474C282.707 314.474 265.551 286.289 234.915 254.873C219.207 238.72 211.966 252.98 198.709 273.478C189.797 287.292 175.537 306.008 170.524 314.252C165.288 322.941 165.399 323.275 164.397 260.555C163.505 203.294 161.723 155.502 160.052 141.911C158.715 130.659 163.394 117.402 169.521 115.062C179.77 111.163 276.357 96.6813 280.813 114.394Z" />
    </svg>
  )
);

Abstract59Sketch.displayName = "Abstract59Sketch";

export const Abstract59SketchMetadata = {
  id: "abstract59_sketch",
  baseId: "abstract59",
  variant: "sketch",
  name: "Abstract59",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract59Sketch;
