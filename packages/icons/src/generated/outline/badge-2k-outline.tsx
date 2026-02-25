/**
 * Auto-generated logo component: Badge 2k Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Badge2kOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Badge2kOutlineLogo = React.forwardRef<SVGSVGElement, Badge2kOutlineLogoProps>(
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
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -10" />
  <path d="M14 9v6" />
  <path d="M17 9l-2 3l2 3" />
  <path d="M15 12h-1" />
  <path d="M7 9h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
    </svg>
  )
);

Badge2kOutlineLogo.displayName = "Badge2kOutlineLogo";

export const Badge2kOutlineLogoMetadata = {
  id: "badge-2k-outline",
  baseId: "badge-2k-outline",
  variant: "default",
  name: "Badge 2k Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Badge2kOutlineLogo;
