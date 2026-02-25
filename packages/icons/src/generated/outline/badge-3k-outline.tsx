/**
 * Auto-generated logo component: Badge 3k Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Badge3kOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Badge3kOutlineLogo = React.forwardRef<SVGSVGElement, Badge3kOutlineLogoProps>(
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
  <path d="M7 9.5a.5 .5 0 0 1 .5 -.5h1a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1a.5 .5 0 0 1 -.5 -.5" />
    </svg>
  )
);

Badge3kOutlineLogo.displayName = "Badge3kOutlineLogo";

export const Badge3kOutlineLogoMetadata = {
  id: "badge-3k-outline",
  baseId: "badge-3k-outline",
  variant: "default",
  name: "Badge 3k Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Badge3kOutlineLogo;
