/**
 * Auto-generated logo component: Check Check (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CheckCheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CheckCheckLogo = React.forwardRef<SVGSVGElement, CheckCheckLogoProps>(
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
      <path d="M18 6 7 17l-5-5" />
  <path d="m22 10-7.5 7.5L13 16" />
    </svg>
  )
);

CheckCheckLogo.displayName = "CheckCheckLogo";

export const CheckCheckLogoMetadata = {
  id: "check-check",
  baseId: "check-check",
  variant: "default",
  name: "Check Check",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CheckCheckLogo;
