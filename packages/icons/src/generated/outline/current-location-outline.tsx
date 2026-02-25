/**
 * Auto-generated logo component: Current Location Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CurrentLocationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CurrentLocationOutlineLogo = React.forwardRef<SVGSVGElement, CurrentLocationOutlineLogoProps>(
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
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M4 12a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
  <path d="M12 2l0 2" />
  <path d="M12 20l0 2" />
  <path d="M20 12l2 0" />
  <path d="M2 12l2 0" />
    </svg>
  )
);

CurrentLocationOutlineLogo.displayName = "CurrentLocationOutlineLogo";

export const CurrentLocationOutlineLogoMetadata = {
  id: "current-location-outline",
  baseId: "current-location-outline",
  variant: "default",
  name: "Current Location Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CurrentLocationOutlineLogo;
