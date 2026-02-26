
'use client';
import React from 'react';

export interface Arrows26SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows26Sketch = React.forwardRef<SVGSVGElement, Arrows26SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M403.004 19.0938C396.804 21.4938 303.804 76.2934 260.804 74.6934C245.004 74.0934 237.204 81.8936 247.404 87.8936C255.004 92.2936 276.204 121.694 279.804 126.294C279.604 126.494 211.804 162.293 195.405 225.694C194.805 228.094 189.404 232.494 182.604 236.494C127.804 267.094 86.4044 348.694 78.8044 440.694C78.2044 448.894 76.605 460.494 75.405 466.494C70.805 490.294 106.804 496.694 111.804 444.694C118.804 373.294 134.204 327.494 164.804 287.694C182.604 264.294 183.804 263.694 183.804 277.894C183.804 342.094 273.604 361.694 315.404 312.294C347.004 275.094 320.204 217.694 250.204 217.694C240.004 217.694 231.804 217.294 231.804 216.694C232.204 203.094 271.404 152.294 289.204 142.094C292.604 140.094 317.804 166.293 317.204 171.493C316.204 180.493 338.204 183.693 345.804 175.493C347.604 173.493 355.004 159.294 362.004 143.894C377.404 109.894 390.604 89.6936 410.204 57.8936C426.804 30.2936 432.804 7.49375 403.004 19.0938ZM218.804 260.694C223.204 237.694 248.404 225.294 269.404 235.694C298.404 250.094 300.004 276.494 290.004 296.894C263.204 352.094 208.404 315.294 218.804 260.694Z" />
    </svg>
  )
);

Arrows26Sketch.displayName = "Arrows26Sketch";

export const Arrows26SketchMetadata = {
  id: "arrows26_sketch",
  baseId: "arrows26",
  variant: "sketch",
  name: "Arrows26",
  category: "arrows",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Arrows26Sketch;
