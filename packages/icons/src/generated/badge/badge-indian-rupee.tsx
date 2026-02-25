/**
 * Auto-generated logo component: Badge Indian Rupee (default)
 * Category: badge
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgeIndianRupeeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgeIndianRupeeLogo = React.forwardRef<SVGSVGElement, BadgeIndianRupeeLogoProps>(
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
  <path d="M8 8h8" />
  <path d="M8 12h8" />
  <path d="m13 17-5-1h1a4 4 0 0 0 0-8" />
    </svg>
  )
);

BadgeIndianRupeeLogo.displayName = "BadgeIndianRupeeLogo";

export const BadgeIndianRupeeLogoMetadata = {
  id: "badge-indian-rupee",
  baseId: "badge-indian-rupee",
  variant: "default",
  name: "Badge Indian Rupee",
  category: "badge",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgeIndianRupeeLogo;
