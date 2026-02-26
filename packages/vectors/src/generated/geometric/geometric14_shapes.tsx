/**
 * Auto-generated logo component: Geometric14 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric14ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric14Shapes = React.forwardRef<SVGSVGElement, Geometric14ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 357 713"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M143.134 341.937C143.134 319.831 127.396 301.441 107.651 291.499C35.4104 255.126 7.09155 165.391 7.09155 44.5437H349.258C349.258 165.391 320.939 255.126 248.698 291.499C228.953 301.441 213.216 319.831 213.216 341.937V370.762C213.216 392.868 228.953 411.258 248.698 421.2C320.939 457.573 349.258 547.308 349.258 668.155H7.09155C7.09155 547.308 35.4104 457.573 107.651 421.2C127.396 411.258 143.134 392.868 143.134 370.762V341.937Z" fill="#336BB7"/>
    </svg>
  )
);

Geometric14Shapes.displayName = "Geometric14Shapes";

export const Geometric14ShapesMetadata = {
  id: "geometric14_shapes",
  baseId: "geometric14",
  variant: "shapes",
  name: "Geometric14",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 713",
} as const;

export default Geometric14Shapes;
