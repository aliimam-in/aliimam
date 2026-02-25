/**
 * Auto-generated logo component: Badge Ad Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgeAdOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgeAdOffOutlineLogo = React.forwardRef<SVGSVGElement, BadgeAdOffOutlineLogoProps>(
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
      <path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" />
  <path d="M14 14v1h1m2 -2v-2a2 2 0 0 0 -2 -2h-1v1" />
  <path d="M7 15v-4.5a1.5 1.5 0 0 1 2.077 -1.385m.788 .762c.087 .19 .135 .4 .135 .623v4.5" />
  <path d="M7 13h3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BadgeAdOffOutlineLogo.displayName = "BadgeAdOffOutlineLogo";

export const BadgeAdOffOutlineLogoMetadata = {
  id: "badge-ad-off-outline",
  baseId: "badge-ad-off-outline",
  variant: "default",
  name: "Badge Ad Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgeAdOffOutlineLogo;
