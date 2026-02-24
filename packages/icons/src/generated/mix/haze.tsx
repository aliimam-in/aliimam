/**
 * Auto-generated logo component: Haze (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HazeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HazeLogo = React.forwardRef<SVGSVGElement, HazeLogoProps>(
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
      <path d="m5.2 6.2 1.4 1.4" />
  <path d="M2 13h2" />
  <path d="M20 13h2" />
  <path d="m17.4 7.6 1.4-1.4" />
  <path d="M22 17H2" />
  <path d="M22 21H2" />
  <path d="M16 13a4 4 0 0 0-8 0" />
  <path d="M12 5V2.5" />
    </svg>
  )
);

HazeLogo.displayName = "HazeLogo";

export const HazeLogoMetadata = {
  id: "haze",
  baseId: "haze",
  variant: "default",
  name: "Haze",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HazeLogo;
