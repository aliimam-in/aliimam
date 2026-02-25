/**
 * Auto-generated logo component: Wind Electricity Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WindElectricityOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WindElectricityOutlineLogo = React.forwardRef<SVGSVGElement, WindElectricityOutlineLogoProps>(
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
      <path d="M20 7l-3 5h4l-3 5" />
  <path d="M3 16h4a2 2 0 1 1 0 4" />
  <path d="M3 12h8a2 2 0 1 0 0 -4" />
  <path d="M3 8h3a2 2 0 1 0 0 -4" />
    </svg>
  )
);

WindElectricityOutlineLogo.displayName = "WindElectricityOutlineLogo";

export const WindElectricityOutlineLogoMetadata = {
  id: "wind-electricity-outline",
  baseId: "wind-electricity-outline",
  variant: "default",
  name: "Wind Electricity Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WindElectricityOutlineLogo;
