/**
 * Auto-generated logo component: Geometric10 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric10ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric10Shapes = React.forwardRef<SVGSVGElement, Geometric10ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 713 357"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M285.844 66.6242L364.001 15.4419L442.157 66.6242L494.945 35.9148L529.258 95.8713L626.917 85.6348L601.842 160.215L700.821 189.462L634.835 264.042L677.066 309.375L601.842 344.471L364.001 341.375L126.159 344.471L50.9351 309.375L93.1659 264.042L27.1803 189.462L126.159 160.215L101.084 85.6348L198.743 95.8713L233.055 35.9148L285.844 66.6242Z" fill="#F5BD33"/>
    </svg>
  )
);

Geometric10Shapes.displayName = "Geometric10Shapes";

export const Geometric10ShapesMetadata = {
  id: "geometric10_shapes",
  baseId: "geometric10",
  variant: "shapes",
  name: "Geometric10",
  category: "geometric",
  tags: [],
  viewBox: "0 0 713 357",
} as const;

export default Geometric10Shapes;
