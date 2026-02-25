/**
 * Auto-generated logo component: Circles Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CirclesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CirclesOutlineLogo = React.forwardRef<SVGSVGElement, CirclesOutlineLogoProps>(
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
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M2.5 17a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M13.5 17a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    </svg>
  )
);

CirclesOutlineLogo.displayName = "CirclesOutlineLogo";

export const CirclesOutlineLogoMetadata = {
  id: "circles-outline",
  baseId: "circles-outline",
  variant: "default",
  name: "Circles Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CirclesOutlineLogo;
