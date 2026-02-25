/**
 * Auto-generated logo component: Badge Ad Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgeAdOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgeAdOutlineLogo = React.forwardRef<SVGSVGElement, BadgeAdOutlineLogoProps>(
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
  <path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
  <path d="M7 13h3" />
    </svg>
  )
);

BadgeAdOutlineLogo.displayName = "BadgeAdOutlineLogo";

export const BadgeAdOutlineLogoMetadata = {
  id: "badge-ad-outline",
  baseId: "badge-ad-outline",
  variant: "default",
  name: "Badge Ad Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgeAdOutlineLogo;
