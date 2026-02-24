/**
 * Auto-generated logo component: Ferris Wheel (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FerrisWheelLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FerrisWheelLogo = React.forwardRef<SVGSVGElement, FerrisWheelLogoProps>(
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
      <circle cx="12" cy="12" r="2" />
  <path d="M12 2v4" />
  <path d="m6.8 15-3.5 2" />
  <path d="m20.7 7-3.5 2" />
  <path d="M6.8 9 3.3 7" />
  <path d="m20.7 17-3.5-2" />
  <path d="m9 22 3-8 3 8" />
  <path d="M8 22h8" />
  <path d="M18 18.7a9 9 0 1 0-12 0" />
    </svg>
  )
);

FerrisWheelLogo.displayName = "FerrisWheelLogo";

export const FerrisWheelLogoMetadata = {
  id: "ferris-wheel",
  baseId: "ferris-wheel",
  variant: "default",
  name: "Ferris Wheel",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FerrisWheelLogo;
