/**
 * Auto-generated logo component: Badge Hd Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgeHdOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgeHdOutlineLogo = React.forwardRef<SVGSVGElement, BadgeHdOutlineLogoProps>(
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
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
  <path d="M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1" />
  <path d="M7 15v-6" />
  <path d="M10 15v-6" />
  <path d="M7 12h3" />
    </svg>
  )
);

BadgeHdOutlineLogo.displayName = "BadgeHdOutlineLogo";

export const BadgeHdOutlineLogoMetadata = {
  id: "badge-hd-outline",
  baseId: "badge-hd-outline",
  variant: "default",
  name: "Badge Hd Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgeHdOutlineLogo;
