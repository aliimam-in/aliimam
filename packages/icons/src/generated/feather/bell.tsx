/**
 * Auto-generated logo component: Bell (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BellLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BellLogo = React.forwardRef<SVGSVGElement, BellLogoProps>(
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
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  )
);

BellLogo.displayName = "BellLogo";

export const BellLogoMetadata = {
  id: "bell",
  baseId: "bell",
  variant: "default",
  name: "Bell",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BellLogo;
