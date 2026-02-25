/**
 * Auto-generated logo component: Circle Triangle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleTriangleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleTriangleOutlineLogo = React.forwardRef<SVGSVGElement, CircleTriangleOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 20l7 -12h-14l7 12" />
    </svg>
  )
);

CircleTriangleOutlineLogo.displayName = "CircleTriangleOutlineLogo";

export const CircleTriangleOutlineLogoMetadata = {
  id: "circle-triangle-outline",
  baseId: "circle-triangle-outline",
  variant: "default",
  name: "Circle Triangle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleTriangleOutlineLogo;
