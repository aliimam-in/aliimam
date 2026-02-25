/**
 * Auto-generated logo component: Flag Cancel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagCancelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagCancelOutlineLogo = React.forwardRef<SVGSVGElement, FlagCancelOutlineLogoProps>(
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
      <path d="M13.342 14.941a4.993 4.993 0 0 1 -1.342 -.941a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v7" />
  <path d="M5 21v-7" />
  <path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M17 21l4 -4" />
    </svg>
  )
);

FlagCancelOutlineLogo.displayName = "FlagCancelOutlineLogo";

export const FlagCancelOutlineLogoMetadata = {
  id: "flag-cancel-outline",
  baseId: "flag-cancel-outline",
  variant: "default",
  name: "Flag Cancel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagCancelOutlineLogo;
