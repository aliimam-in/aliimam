
'use client';
import React from 'react';

export interface Abstract133ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract133Shapes = React.forwardRef<SVGSVGElement, Abstract133ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 23 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M11.7326 9.73945V0H11.2656V9.73945C11.2656 11.717 9.49967 11.7563 9.49967 11.7563H0V12.2437H9.49967C9.49967 12.2437 11.2656 12.283 11.2656 14.2606V24H11.7326V14.2606C11.7326 12.283 13.4986 12.2437 13.4986 12.2437H23V11.7563H13.4986C13.4986 11.7563 11.7326 11.7188 11.7326 9.73945Z" />
    </svg>
  )
);

Abstract133Shapes.displayName = "Abstract133Shapes";

export const Abstract133ShapesMetadata = {
  id: "abstract133_shapes",
  baseId: "abstract133",
  variant: "shapes",
  name: "Abstract133",
  category: "abstract",
  tags: [],
  viewBox: "0 0 23 24",
} as const;

export default Abstract133Shapes;
