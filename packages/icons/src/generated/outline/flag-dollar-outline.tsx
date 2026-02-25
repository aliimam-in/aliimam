/**
 * Auto-generated logo component: Flag Dollar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagDollarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagDollarOutlineLogo = React.forwardRef<SVGSVGElement, FlagDollarOutlineLogoProps>(
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
      <path d="M13.222 14.882a4.998 4.998 0 0 1 -1.222 -.882a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v5" />
  <path d="M5 21v-7" />
  <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M19 21v1m0 -8v1" />
    </svg>
  )
);

FlagDollarOutlineLogo.displayName = "FlagDollarOutlineLogo";

export const FlagDollarOutlineLogoMetadata = {
  id: "flag-dollar-outline",
  baseId: "flag-dollar-outline",
  variant: "default",
  name: "Flag Dollar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagDollarOutlineLogo;
