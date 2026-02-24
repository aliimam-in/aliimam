/**
 * Auto-generated logo component: Flag Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FlagOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FlagOffLogo = React.forwardRef<SVGSVGElement, FlagOffLogoProps>(
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
      <path d="M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
  <path d="m2 2 20 20" />
  <path d="M4 22V4" />
  <path d="M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347" />
    </svg>
  )
);

FlagOffLogo.displayName = "FlagOffLogo";

export const FlagOffLogoMetadata = {
  id: "flag-off",
  baseId: "flag-off",
  variant: "default",
  name: "Flag Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FlagOffLogo;
