/**
 * Auto-generated logo component: Wind Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WindOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WindOutlineLogo = React.forwardRef<SVGSVGElement, WindOutlineLogoProps>(
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
      <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
  <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
  <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
    </svg>
  )
);

WindOutlineLogo.displayName = "WindOutlineLogo";

export const WindOutlineLogoMetadata = {
  id: "wind-outline",
  baseId: "wind-outline",
  variant: "default",
  name: "Wind Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WindOutlineLogo;
