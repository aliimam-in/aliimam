/**
 * Auto-generated logo component: Life Buoy (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LifeBuoyLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LifeBuoyLogo = React.forwardRef<SVGSVGElement, LifeBuoyLogoProps>(
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
  <path d="m4.93 4.93 4.24 4.24" />
  <path d="m14.83 9.17 4.24-4.24" />
  <path d="m14.83 14.83 4.24 4.24" />
  <path d="m9.17 14.83-4.24 4.24" />
  <circle cx="12" cy="12" r="4" />
    </svg>
  )
);

LifeBuoyLogo.displayName = "LifeBuoyLogo";

export const LifeBuoyLogoMetadata = {
  id: "life-buoy",
  baseId: "life-buoy",
  variant: "default",
  name: "Life Buoy",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LifeBuoyLogo;
