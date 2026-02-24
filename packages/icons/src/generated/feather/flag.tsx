/**
 * Auto-generated logo component: Flag (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagLogo = React.forwardRef<SVGSVGElement, FlagLogoProps>(
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
    </svg>
  )
);

FlagLogo.displayName = "FlagLogo";

export const FlagLogoMetadata = {
  id: "flag",
  baseId: "flag",
  variant: "default",
  name: "Flag",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagLogo;
