/**
 * Auto-generated logo component: Badge Turkish Lira (default)
 * Category: badge
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgeTurkishLiraLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgeTurkishLiraLogo = React.forwardRef<SVGSVGElement, BadgeTurkishLiraLogoProps>(
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
      <path d="M11 7v10a5 5 0 0 0 5-5" />
  <path d="m15 8-6 3" />
  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76" />
    </svg>
  )
);

BadgeTurkishLiraLogo.displayName = "BadgeTurkishLiraLogo";

export const BadgeTurkishLiraLogoMetadata = {
  id: "badge-turkish-lira",
  baseId: "badge-turkish-lira",
  variant: "default",
  name: "Badge Turkish Lira",
  category: "badge",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgeTurkishLiraLogo;
