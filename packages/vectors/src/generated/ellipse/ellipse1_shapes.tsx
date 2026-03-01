
'use client';
import React from 'react';

export interface Ellipse1ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Ellipse1Shapes = React.forwardRef<SVGSVGElement, Ellipse1ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_2068_771)">
<path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_771">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Ellipse1Shapes.displayName = "Ellipse1Shapes";

export const Ellipse1ShapesMetadata = {
  id: "ellipse1_shapes",
  baseId: "ellipse1",
  variant: "shapes",
  name: "Ellipse1",
  category: "ellipse",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Ellipse1Shapes;
