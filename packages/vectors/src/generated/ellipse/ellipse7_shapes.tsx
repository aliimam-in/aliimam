
'use client';
import React from 'react';

export interface Ellipse7ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Ellipse7Shapes = React.forwardRef<SVGSVGElement, Ellipse7ShapesProps>(
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
      <path d="M24 12C24 18.6274 18.6274 24 12 24C16.5066 24 20.16 20.3466 20.16 15.84C20.16 11.3334 16.5066 7.68 12 7.68C7.49336 7.68 3.84 11.3334 3.84 15.84C3.84 20.3466 7.49336 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="currentColor"/>
<path d="M12 24C8.81884 24 6.24 21.4212 6.24 18.24C6.24 15.0588 8.81884 12.48 12 12.48C15.1812 12.48 17.76 15.0588 17.76 18.24C17.76 21.4212 15.1812 24 12 24Z" fill="currentColor"/>
    </svg>
  )
);

Ellipse7Shapes.displayName = "Ellipse7Shapes";

export const Ellipse7ShapesMetadata = {
  id: "ellipse7_shapes",
  baseId: "ellipse7",
  variant: "shapes",
  name: "Ellipse7",
  category: "ellipse",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Ellipse7Shapes;
