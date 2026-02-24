/**
 * Auto-generated logo component: Check (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CheckLogo = React.forwardRef<SVGSVGElement, CheckLogoProps>(
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
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
);

CheckLogo.displayName = "CheckLogo";

export const CheckLogoMetadata = {
  id: "check",
  baseId: "check",
  variant: "default",
  name: "Check",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CheckLogo;
