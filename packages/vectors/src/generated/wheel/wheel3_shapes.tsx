
'use client';
import React from 'react';

export interface Wheel3ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Wheel3Shapes = React.forwardRef<SVGSVGElement, Wheel3ShapesProps>(
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
      <g clipPath="url(#clip0_2068_823)">
<path d="M13.2 0H10.8L11.5668 10.9541L4.36325 2.66619L2.66619 4.36325L10.9541 11.5668L3.14722e-07 10.8L0 13.2L10.9541 12.4332L2.66619 19.6368L4.36325 21.3338L11.5668 13.0459L10.8 24H13.2L12.4332 13.0459L19.6368 21.3338L21.3338 19.6368L13.0459 12.4332L24 13.2V10.8L13.0459 11.5668L21.3338 4.36325L19.6368 2.66619L12.4332 10.9541L13.2 0Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_823">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Wheel3Shapes.displayName = "Wheel3Shapes";

export const Wheel3ShapesMetadata = {
  id: "wheel3_shapes",
  baseId: "wheel3",
  variant: "shapes",
  name: "Wheel3",
  category: "wheel",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Wheel3Shapes;
