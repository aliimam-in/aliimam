
'use client';
import React from 'react';

export interface Geometric31ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric31Shapes = React.forwardRef<SVGSVGElement, Geometric31ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 357 713"
      
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M100.51 401.08C100.51 410.522 108.248 418.132 117.689 417.974L177.026 416.985C272.171 415.399 350.153 492.092 350.153 587.25L350.153 614.109C350.153 640.35 328.88 661.622 302.639 661.622C276.398 661.622 255.126 640.35 255.126 614.109L255.126 587.25C255.126 545.193 220.661 511.298 178.61 511.998L119.273 512.988C56.7377 514.03 5.48339 463.623 5.48339 401.08C5.48338 338.537 56.736 288.131 119.27 289.171L178.609 290.159C220.661 290.859 255.126 256.963 255.126 214.905L255.126 188.865C255.126 162.624 276.398 141.352 302.639 141.352C328.88 141.352 350.153 162.624 350.153 188.865L350.153 214.905C350.153 310.063 272.172 386.756 177.027 385.173L117.688 384.185C108.248 384.028 100.51 391.638 100.51 401.08Z" fill="#F5BD33"/>
    </svg>
  )
);

Geometric31Shapes.displayName = "Geometric31Shapes";

export const Geometric31ShapesMetadata = {
  id: "geometric31_shapes",
  baseId: "geometric31",
  variant: "shapes",
  name: "Geometric31",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 713",
} as const;

export default Geometric31Shapes;
