
'use client';
import React from 'react';

export interface Arrows22SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows22Sketch = React.forwardRef<SVGSVGElement, Arrows22SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M412.866 60.503C403.294 65.3601 344.294 99.9317 333.437 99.9317C323.437 99.9317 320.151 110.217 329.58 112.075C336.866 113.503 339.437 118.788 352.437 130.217C362.294 138.931 365.866 133.931 313.866 184.503C169.866 324.36 91.0088 404.646 71.5803 431.503C60.1517 447.217 73.5801 444.503 80.723 439.074C88.8658 432.932 102.866 418.932 130.866 390.217C155.294 365.217 338.294 185.932 351.151 173.074C376.58 147.646 375.294 148.36 383.58 156.932C395.151 169.217 412.866 168.789 412.866 156.217C412.866 144.503 422.009 103.646 431.58 72.2175C436.294 56.789 429.009 52.2172 412.866 60.503Z" fill="currentColor"/>
    </svg>
  )
);

Arrows22Sketch.displayName = "Arrows22Sketch";

export const Arrows22SketchMetadata = {
  id: "arrows22_sketch",
  baseId: "arrows22",
  variant: "sketch",
  name: "Arrows22",
  category: "arrows",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Arrows22Sketch;
