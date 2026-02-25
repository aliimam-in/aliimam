/**
 * Auto-generated logo component: Badge Wc Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgeWcOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgeWcOutlineLogo = React.forwardRef<SVGSVGElement, BadgeWcOutlineLogoProps>(
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
  <path d="M6.5 9l.5 6l2 -4l2 4l.5 -6" />
  <path d="M17 10.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
    </svg>
  )
);

BadgeWcOutlineLogo.displayName = "BadgeWcOutlineLogo";

export const BadgeWcOutlineLogoMetadata = {
  id: "badge-wc-outline",
  baseId: "badge-wc-outline",
  variant: "default",
  name: "Badge Wc Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgeWcOutlineLogo;
