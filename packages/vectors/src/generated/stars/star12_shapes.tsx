/**
 * Auto-generated logo component: Star12 (shapes)
 * Category: stars
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Star12ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Star12Shapes = React.forwardRef<SVGSVGElement, Star12ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M12 24L10.2706 15.3529L5.39996 18.6L8.64702 13.7294L0 12L8.64704 10.2706L5.39996 5.39996L10.2706 8.64705L12 0L13.7294 8.64702L18.6 5.39996L15.3529 10.2706L24 12L15.3529 13.7294L18.6 18.6L13.7294 15.3529L12 24Z" />
    </svg>
  )
);

Star12Shapes.displayName = "Star12Shapes";

export const Star12ShapesMetadata = {
  id: "star12_shapes",
  baseId: "star12",
  variant: "shapes",
  name: "Star12",
  category: "stars",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Star12Shapes;
