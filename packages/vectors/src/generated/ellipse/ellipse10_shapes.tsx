
'use client';
import React from 'react';

export interface Ellipse10ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Ellipse10Shapes = React.forwardRef<SVGSVGElement, Ellipse10ShapesProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM18.6 5.88C18.6 5.6149 18.3851 5.4 18.12 5.4H5.88C5.6149 5.4 5.4 5.6149 5.4 5.88V18.12C5.4 18.3851 5.6149 18.6 5.88 18.6H18.12C18.3851 18.6 18.6 18.3851 18.6 18.12V5.88Z" fill="currentColor"/>
    </svg>
  )
);

Ellipse10Shapes.displayName = "Ellipse10Shapes";

export const Ellipse10ShapesMetadata = {
  id: "ellipse10_shapes",
  baseId: "ellipse10",
  variant: "shapes",
  name: "Ellipse10",
  category: "ellipse",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Ellipse10Shapes;
