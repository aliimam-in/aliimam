
'use client';
import React from 'react';

export interface Misc10ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Misc10Shapes = React.forwardRef<SVGSVGElement, Misc10ShapesProps>(
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
      <path d="M16.32 0L12 4.32L7.68 3.35704e-07H7.1337e-07V7.68L4.32 12L0 16.32L3.77666e-07 24H7.68L12 19.68L16.32 24H24V16.32L19.68 12L24 7.68V3.35704e-07L16.32 0Z" fill="currentColor"/>
    </svg>
  )
);

Misc10Shapes.displayName = "Misc10Shapes";

export const Misc10ShapesMetadata = {
  id: "misc10_shapes",
  baseId: "misc10",
  variant: "shapes",
  name: "Misc10",
  category: "misc",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Misc10Shapes;
