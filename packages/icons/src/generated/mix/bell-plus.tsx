/**
 * Auto-generated logo component: Bell Plus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BellPlusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BellPlusLogo = React.forwardRef<SVGSVGElement, BellPlusLogoProps>(
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
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
  <path d="M15 8h6" />
  <path d="M18 5v6" />
  <path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332" />
    </svg>
  )
);

BellPlusLogo.displayName = "BellPlusLogo";

export const BellPlusLogoMetadata = {
  id: "bell-plus",
  baseId: "bell-plus",
  variant: "default",
  name: "Bell Plus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BellPlusLogo;
