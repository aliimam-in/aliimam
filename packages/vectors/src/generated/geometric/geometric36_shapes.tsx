
'use client';
import React from 'react';

export interface Geometric36ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric36Shapes = React.forwardRef<SVGSVGElement, Geometric36ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 357 357"
      
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M178.175 47.5133C106.013 47.5133 47.5135 106.012 47.5135 178.175C47.5135 250.337 106.013 308.836 178.175 308.836C250.337 308.836 308.836 250.337 308.836 178.175C308.836 106.012 250.337 47.5133 178.175 47.5133ZM0.000244141 178.175C0.000244141 79.7716 79.7718 0 178.175 0C276.578 0 356.35 79.7716 356.35 178.175C356.35 276.578 276.578 356.35 178.175 356.35C79.7718 356.35 0.000244141 276.578 0.000244141 178.175Z" fill="#43A363"/>
<path fillRule="evenodd" clipRule="evenodd" d="M178.175 130.662C151.934 130.662 130.662 151.934 130.662 178.175C130.662 204.416 151.934 225.688 178.175 225.688C204.416 225.688 225.688 204.416 225.688 178.175C225.688 151.934 204.416 130.662 178.175 130.662ZM83.1484 178.175C83.1484 125.693 125.693 83.1484 178.175 83.1484C230.657 83.1484 273.202 125.693 273.202 178.175C273.202 230.657 230.657 273.202 178.175 273.202C125.693 273.202 83.1484 230.657 83.1484 178.175Z" fill="#43A363"/>
    </svg>
  )
);

Geometric36Shapes.displayName = "Geometric36Shapes";

export const Geometric36ShapesMetadata = {
  id: "geometric36_shapes",
  baseId: "geometric36",
  variant: "shapes",
  name: "Geometric36",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric36Shapes;
