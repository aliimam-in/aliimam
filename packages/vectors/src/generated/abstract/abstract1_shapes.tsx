
'use client';
import React from 'react';

export interface Abstract1ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract1Shapes = React.forwardRef<SVGSVGElement, Abstract1ShapesProps>(
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
      <path d="M12 24L6 18C9.31465 21.3128 14.6872 21.3128 18.0019 18L12.0019 24H12ZM24 12L18 18C21.3128 14.6854 21.3128 9.31276 18 5.99811L24 11.9981V12ZM6 18L0 12L6 6C2.68724 9.31465 2.68724 14.6872 6 18.0019V18ZM6 6L12 0L18 6C14.6854 2.68724 9.31276 2.68724 5.99811 6H6Z" fill="currentColor"/>
    </svg>
  )
);

Abstract1Shapes.displayName = "Abstract1Shapes";

export const Abstract1ShapesMetadata = {
  id: "abstract1_shapes",
  baseId: "abstract1",
  variant: "shapes",
  name: "Abstract1",
  category: "abstract",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Abstract1Shapes;
