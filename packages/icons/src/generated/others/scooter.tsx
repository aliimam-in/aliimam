/**
 * Auto-generated logo component: Scooter (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScooterLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScooterLogo = React.forwardRef<SVGSVGElement, ScooterLogoProps>(
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
      <path d="M21 4h-3.5l2 11.05" />
  <path d="M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009" />
  <circle cx="19.5" cy="17.5" r="2.5" />
  <circle cx="4.5" cy="17.5" r="2.5" />
    </svg>
  )
);

ScooterLogo.displayName = "ScooterLogo";

export const ScooterLogoMetadata = {
  id: "scooter",
  baseId: "scooter",
  variant: "default",
  name: "Scooter",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScooterLogo;
