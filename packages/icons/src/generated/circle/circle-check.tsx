/**
 * Auto-generated logo component: Circle Check (default)
 * Category: circle
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleCheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleCheckLogo = React.forwardRef<SVGSVGElement, CircleCheckLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="m9 12 2 2 4-4" />
    </svg>
  )
);

CircleCheckLogo.displayName = "CircleCheckLogo";

export const CircleCheckLogoMetadata = {
  id: "circle-check",
  baseId: "circle-check",
  variant: "default",
  name: "Circle Check",
  category: "circle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleCheckLogo;
