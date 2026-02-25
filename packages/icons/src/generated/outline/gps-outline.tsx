/**
 * Auto-generated logo component: Gps Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GpsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GpsOutlineLogo = React.forwardRef<SVGSVGElement, GpsOutlineLogoProps>(
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
  <path d="M12 17l-1 -4l-4 -1l9 -4l-4 9" />
    </svg>
  )
);

GpsOutlineLogo.displayName = "GpsOutlineLogo";

export const GpsOutlineLogoMetadata = {
  id: "gps-outline",
  baseId: "gps-outline",
  variant: "default",
  name: "Gps Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GpsOutlineLogo;
