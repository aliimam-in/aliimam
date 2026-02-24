/**
 * Auto-generated logo component: Check Circle (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CheckCircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CheckCircleLogo = React.forwardRef<SVGSVGElement, CheckCircleLogoProps>(
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  )
);

CheckCircleLogo.displayName = "CheckCircleLogo";

export const CheckCircleLogoMetadata = {
  id: "check-circle",
  baseId: "check-circle",
  variant: "default",
  name: "Check Circle",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CheckCircleLogo;
