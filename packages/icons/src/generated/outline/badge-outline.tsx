/**
 * Auto-generated logo component: Badge Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgeOutlineLogo = React.forwardRef<SVGSVGElement, BadgeOutlineLogoProps>(
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
      <path d="M17 17v-13l-5 3l-5 -3v13l5 3l5 -3" />
    </svg>
  )
);

BadgeOutlineLogo.displayName = "BadgeOutlineLogo";

export const BadgeOutlineLogoMetadata = {
  id: "badge-outline",
  baseId: "badge-outline",
  variant: "default",
  name: "Badge Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgeOutlineLogo;
