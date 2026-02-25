/**
 * Auto-generated logo component: Wind Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WindOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WindOffOutlineLogo = React.forwardRef<SVGSVGElement, WindOffOutlineLogoProps>(
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
      <path d="M5 8h3m4 0h1.5a2.5 2.5 0 1 0 -2.34 -3.24" />
  <path d="M3 12h9" />
  <path d="M16 12h2.5a2.5 2.5 0 0 1 1.801 4.282" />
  <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

WindOffOutlineLogo.displayName = "WindOffOutlineLogo";

export const WindOffOutlineLogoMetadata = {
  id: "wind-off-outline",
  baseId: "wind-off-outline",
  variant: "default",
  name: "Wind Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WindOffOutlineLogo;
