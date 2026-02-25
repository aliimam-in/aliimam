/**
 * Auto-generated logo component: Current Location Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrentLocationOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrentLocationOffOutlineLogo = React.forwardRef<SVGSVGElement, CurrentLocationOffOutlineLogoProps>(
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
      <path d="M14.685 10.661c-.3 -.6 -.795 -1.086 -1.402 -1.374m-3.397 .584a3 3 0 1 0 4.24 4.245" />
  <path d="M6.357 6.33a8 8 0 1 0 11.301 11.326m1.642 -2.378a8 8 0 0 0 -10.597 -10.569" />
  <path d="M12 2v2" />
  <path d="M12 20v2" />
  <path d="M20 12h2" />
  <path d="M2 12h2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CurrentLocationOffOutlineLogo.displayName = "CurrentLocationOffOutlineLogo";

export const CurrentLocationOffOutlineLogoMetadata = {
  id: "current-location-off-outline",
  baseId: "current-location-off-outline",
  variant: "default",
  name: "Current Location Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrentLocationOffOutlineLogo;
