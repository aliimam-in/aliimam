/**
 * Auto-generated logo component: Percentage 20 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Percentage20OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Percentage20OutlineLogo = React.forwardRef<SVGSVGElement, Percentage20OutlineLogoProps>(
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
      <path d="M12 3a9 9 0 0 1 8.497 6.025l-8.497 2.975v-9" fill="currentColor" stroke="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    </svg>
  )
);

Percentage20OutlineLogo.displayName = "Percentage20OutlineLogo";

export const Percentage20OutlineLogoMetadata = {
  id: "percentage-20-outline",
  baseId: "percentage-20-outline",
  variant: "default",
  name: "Percentage 20 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Percentage20OutlineLogo;
