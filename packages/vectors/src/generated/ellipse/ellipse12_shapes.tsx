
'use client';
import React from 'react';

export interface Ellipse12ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Ellipse12Shapes = React.forwardRef<SVGSVGElement, Ellipse12ShapesProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="currentColor"/>
    </svg>
  )
);

Ellipse12Shapes.displayName = "Ellipse12Shapes";

export const Ellipse12ShapesMetadata = {
  id: "ellipse12_shapes",
  baseId: "ellipse12",
  variant: "shapes",
  name: "Ellipse12",
  category: "ellipse",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Ellipse12Shapes;
