/**
 * Auto-generated logo component: Circle Dot Dashed (default)
 * Category: circle
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleDotDashedLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleDotDashedLogo = React.forwardRef<SVGSVGElement, CircleDotDashedLogoProps>(
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
      <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" />
  <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" />
  <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" />
  <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" />
  <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" />
  <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" />
  <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" />
  <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" />
  <circle cx="12" cy="12" r="1" />
    </svg>
  )
);

CircleDotDashedLogo.displayName = "CircleDotDashedLogo";

export const CircleDotDashedLogoMetadata = {
  id: "circle-dot-dashed",
  baseId: "circle-dot-dashed",
  variant: "default",
  name: "Circle Dot Dashed",
  category: "circle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleDotDashedLogo;
