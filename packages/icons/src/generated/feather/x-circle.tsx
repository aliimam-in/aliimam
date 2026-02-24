/**
 * Auto-generated logo component: X Circle (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XCircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const XCircleLogo = React.forwardRef<SVGSVGElement, XCircleLogoProps>(
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
      <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
    </svg>
  )
);

XCircleLogo.displayName = "XCircleLogo";

export const XCircleLogoMetadata = {
  id: "x-circle",
  baseId: "x-circle",
  variant: "default",
  name: "X Circle",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default XCircleLogo;
