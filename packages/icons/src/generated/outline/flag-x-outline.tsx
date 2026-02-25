/**
 * Auto-generated logo component: Flag X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagXOutlineLogo = React.forwardRef<SVGSVGElement, FlagXOutlineLogoProps>(
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
      <path d="M13.533 15.028a4.988 4.988 0 0 1 -1.533 -1.028a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v8.5" />
  <path d="M5 21v-7" />
  <path d="M22 22l-5 -5" />
  <path d="M17 22l5 -5" />
    </svg>
  )
);

FlagXOutlineLogo.displayName = "FlagXOutlineLogo";

export const FlagXOutlineLogoMetadata = {
  id: "flag-x-outline",
  baseId: "flag-x-outline",
  variant: "default",
  name: "Flag X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagXOutlineLogo;
