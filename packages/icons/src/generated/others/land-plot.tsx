/**
 * Auto-generated logo component: Land Plot (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LandPlotLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LandPlotLogo = React.forwardRef<SVGSVGElement, LandPlotLogoProps>(
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
      <path d="m12 8 6-3-6-3v10" />
  <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
  <path d="m6.49 12.85 11.02 6.3" />
  <path d="M17.51 12.85 6.5 19.15" />
    </svg>
  )
);

LandPlotLogo.displayName = "LandPlotLogo";

export const LandPlotLogoMetadata = {
  id: "land-plot",
  baseId: "land-plot",
  variant: "default",
  name: "Land Plot",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LandPlotLogo;
