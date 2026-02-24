/**
 * Auto-generated logo component: Life Buoy (default)
 * Category: feather
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
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/>
    </svg>
  )
);

LifeBuoyLogo.displayName = "LifeBuoyLogo";

export const LifeBuoyLogoMetadata = {
  id: "life-buoy",
  baseId: "life-buoy",
  variant: "default",
  name: "Life Buoy",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LifeBuoyLogo;
