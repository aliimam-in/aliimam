
'use client';
import React from 'react';

export interface Wheel6ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Wheel6Shapes = React.forwardRef<SVGSVGElement, Wheel6ShapesProps>(
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
      <path d="M9.10356 13.2H0V10.8H9.10239L4.30264 6L5.99965 4.30291L10.8 9.10349V0H13.2V9.10336L18.0002 4.3029L19.6972 6L14.8975 10.8H24V13.2H14.8963L19.6972 18.0012L18.0002 19.6983L13.2 14.8978V24H10.8V14.8977L5.99965 19.6983L4.30263 18.0012L9.10356 13.2Z" fill="currentColor"/>
    </svg>
  )
);

Wheel6Shapes.displayName = "Wheel6Shapes";

export const Wheel6ShapesMetadata = {
  id: "wheel6_shapes",
  baseId: "wheel6",
  variant: "shapes",
  name: "Wheel6",
  category: "wheel",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Wheel6Shapes;
