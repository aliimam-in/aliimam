/**
 * Auto-generated logo component: Badge 5k Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Badge5kOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Badge5kOutlineLogo = React.forwardRef<SVGSVGElement, Badge5kOutlineLogoProps>(
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
  <path d="M7 15h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" />
    </svg>
  )
);

Badge5kOutlineLogo.displayName = "Badge5kOutlineLogo";

export const Badge5kOutlineLogoMetadata = {
  id: "badge-5k-outline",
  baseId: "badge-5k-outline",
  variant: "default",
  name: "Badge 5k Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Badge5kOutlineLogo;
