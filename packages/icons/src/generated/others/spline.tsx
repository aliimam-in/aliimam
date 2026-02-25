/**
 * Auto-generated logo component: Spline (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SplineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SplineLogo = React.forwardRef<SVGSVGElement, SplineLogoProps>(
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
      <circle cx="19" cy="5" r="2" />
  <circle cx="5" cy="19" r="2" />
  <path d="M5 17A12 12 0 0 1 17 5" />
    </svg>
  )
);

SplineLogo.displayName = "SplineLogo";

export const SplineLogoMetadata = {
  id: "spline",
  baseId: "spline",
  variant: "default",
  name: "Spline",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SplineLogo;
