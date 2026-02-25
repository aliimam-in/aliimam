/**
 * Auto-generated logo component: Lasso Polygon (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LassoPolygonFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LassoPolygonFilledLogo = React.forwardRef<SVGSVGElement, LassoPolygonFilledLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M5.581 2.186l6.566 4.69l7.502 -2.812a1 1 0 0 1 1.326 .714l.019 .112l1 9a1 1 0 0 1 -.678 1.059l-9 3a1 1 0 0 1 -.553 .023l-4.434 -1.082a3 3 0 0 1 -1.287 .923c.095 .986 .374 1.9 .826 2.69a1 1 0 0 1 -1.736 .993c-.624 -1.09 -.99 -2.335 -1.098 -3.656a3 3 0 0 1 -2.034 -2.84l.005 -.176a3 3 0 0 1 .86 -1.932l-.818 -2.59a1 1 0 0 1 -.009 -.577l2 -7a1 1 0 0 1 1.543 -.539m-.009 2.451l-1.528 5.348l.642 2.031q .155 -.016 .314 -.016a3 3 0 0 1 3 2.995l3.957 .965l7.96 -2.654l-.769 -6.919l-6.797 2.55a1 1 0 0 1 -.827 -.058l-.105 -.065z" />
    </svg>
  )
);

LassoPolygonFilledLogo.displayName = "LassoPolygonFilledLogo";

export const LassoPolygonFilledLogoMetadata = {
  id: "lasso-polygon_filled",
  baseId: "lasso-polygon",
  variant: "filled",
  name: "Lasso Polygon",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LassoPolygonFilledLogo;
