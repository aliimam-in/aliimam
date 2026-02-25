/**
 * Auto-generated logo component: Hours 12 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Hours12OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Hours12OutlineLogo = React.forwardRef<SVGSVGElement, Hours12OutlineLogoProps>(
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
      <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
  <path d="M4 13c.468 3.6 3.384 6.546 7 7" />
  <path d="M18 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
  <path d="M15 21v-6" />
    </svg>
  )
);

Hours12OutlineLogo.displayName = "Hours12OutlineLogo";

export const Hours12OutlineLogoMetadata = {
  id: "hours-12-outline",
  baseId: "hours-12-outline",
  variant: "default",
  name: "Hours 12 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Hours12OutlineLogo;
