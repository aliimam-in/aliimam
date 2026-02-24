/**
 * Auto-generated logo component: Check Square (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CheckSquareLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CheckSquareLogo = React.forwardRef<SVGSVGElement, CheckSquareLogoProps>(
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
      <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  )
);

CheckSquareLogo.displayName = "CheckSquareLogo";

export const CheckSquareLogoMetadata = {
  id: "check-square",
  baseId: "check-square",
  variant: "default",
  name: "Check Square",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CheckSquareLogo;
