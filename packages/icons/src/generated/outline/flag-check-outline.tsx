/**
 * Auto-generated logo component: Flag Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagCheckOutlineLogo = React.forwardRef<SVGSVGElement, FlagCheckOutlineLogoProps>(
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
      <path d="M13.767 15.12a4.983 4.983 0 0 1 -1.767 -1.12a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v8.5" />
  <path d="M5 21v-7" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

FlagCheckOutlineLogo.displayName = "FlagCheckOutlineLogo";

export const FlagCheckOutlineLogoMetadata = {
  id: "flag-check-outline",
  baseId: "flag-check-outline",
  variant: "default",
  name: "Flag Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagCheckOutlineLogo;
