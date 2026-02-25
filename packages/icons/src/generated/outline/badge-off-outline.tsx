/**
 * Auto-generated logo component: Badge Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgeOffOutlineLogo = React.forwardRef<SVGSVGElement, BadgeOffOutlineLogoProps>(
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
      <path d="M7 7v10l5 3l5 -3m0 -4v-9l-5 3l-2.496 -1.497" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BadgeOffOutlineLogo.displayName = "BadgeOffOutlineLogo";

export const BadgeOffOutlineLogoMetadata = {
  id: "badge-off-outline",
  baseId: "badge-off-outline",
  variant: "default",
  name: "Badge Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgeOffOutlineLogo;
