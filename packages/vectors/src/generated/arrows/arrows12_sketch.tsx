
'use client';
import React from 'react';

export interface Arrows12SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows12Sketch = React.forwardRef<SVGSVGElement, Arrows12SketchProps>(
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
      <path d="M374.518 113.81C327.518 130.81 287.765 147.81 241.016 152.06C216.266 154.31 212.517 156.31 217.017 164.56C224.767 179.06 260.768 182.81 299.018 173.31C306.268 171.56 312.018 170.31 312.018 170.81C312.018 171.31 298.268 183.311 281.518 197.811C227.516 244.061 219.766 254.31 230.266 264.31C246.516 279.56 258.768 275.31 295.268 240.81C312.018 224.81 329.018 209.56 333.018 206.81L340.268 201.561L338.765 210.06C331.265 251.06 337.268 281.81 354.018 287.56C371.518 293.56 375.768 286.56 378.268 247.56C380.018 222.31 396.265 152.311 403.765 137.811C411.015 123.561 391.768 107.81 374.518 113.81Z" fill="currentColor"/>
<path d="M170.767 302.31C140.767 321.56 94.0158 363.56 95.0158 370.56C96.0158 377.56 107.016 384.81 118.766 386.56C131.766 388.31 207.017 320.81 207.017 307.56C207.017 295.56 186.017 292.56 170.767 302.31Z" fill="currentColor"/>
    </svg>
  )
);

Arrows12Sketch.displayName = "Arrows12Sketch";

export const Arrows12SketchMetadata = {
  id: "arrows12_sketch",
  baseId: "arrows12",
  variant: "sketch",
  name: "Arrows12",
  category: "arrows",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Arrows12Sketch;
