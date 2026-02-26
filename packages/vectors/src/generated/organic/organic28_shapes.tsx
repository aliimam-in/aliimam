
'use client';
import React from 'react';

export interface Organic28ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Organic28Shapes = React.forwardRef<SVGSVGElement, Organic28ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 300 300"
      
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M167.407 19.5571C135.917 17.3137 118.199 16.2604 85.8441 32.3512C23.3098 63.4534 -30.0464 176.668 30.7607 239.626C62.8795 272.879 97.518 275.14 136.784 281.067C157.492 284.195 201.303 275.413 219.918 265.776C242.092 254.297 261.677 244.241 276.514 219.153C337.593 115.866 242.27 19.5571 167.407 19.5571Z" fill="#3D5138"/>
    </svg>
  )
);

Organic28Shapes.displayName = "Organic28Shapes";

export const Organic28ShapesMetadata = {
  id: "organic28_shapes",
  baseId: "organic28",
  variant: "shapes",
  name: "Organic28",
  category: "organic",
  tags: [],
  viewBox: "0 0 300 300",
} as const;

export default Organic28Shapes;
