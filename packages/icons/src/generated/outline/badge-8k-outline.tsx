/**
 * Auto-generated logo component: Badge 8k Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Badge8kOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Badge8kOutlineLogo = React.forwardRef<SVGSVGElement, Badge8kOutlineLogoProps>(
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
  <path d="M8.5 12h-.5a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

Badge8kOutlineLogo.displayName = "Badge8kOutlineLogo";

export const Badge8kOutlineLogoMetadata = {
  id: "badge-8k-outline",
  baseId: "badge-8k-outline",
  variant: "default",
  name: "Badge 8k Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Badge8kOutlineLogo;
