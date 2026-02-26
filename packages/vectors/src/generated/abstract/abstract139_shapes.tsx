
'use client';
import React from 'react';

export interface Abstract139ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract139Shapes = React.forwardRef<SVGSVGElement, Abstract139ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M10 0L10.3746 9.70204C10.4018 10.4069 11.1273 10.8416 11.7291 10.5146L20 6L12.1018 11.1874C11.5273 11.5653 11.5273 12.4347 12.1018 12.8126L20 18L11.7291 13.4854C11.1273 13.1584 10.4018 13.5931 10.3746 14.298L10 24L9.62544 14.298C9.59817 13.5931 8.87273 13.1584 8.27091 13.4854L0 18L7.89817 12.8126C8.47272 12.4347 8.47272 11.5653 7.89817 11.1874L0 6L8.27091 10.5146C8.87273 10.8416 9.59817 10.4069 9.62544 9.70204L10 0Z" fill="currentColor"/>
    </svg>
  )
);

Abstract139Shapes.displayName = "Abstract139Shapes";

export const Abstract139ShapesMetadata = {
  id: "abstract139_shapes",
  baseId: "abstract139",
  variant: "shapes",
  name: "Abstract139",
  category: "abstract",
  tags: [],
  viewBox: "0 0 20 24",
} as const;

export default Abstract139Shapes;
