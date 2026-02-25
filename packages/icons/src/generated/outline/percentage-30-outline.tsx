/**
 * Auto-generated logo component: Percentage 30 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Percentage30OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Percentage30OutlineLogo = React.forwardRef<SVGSVGElement, Percentage30OutlineLogoProps>(
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
      <path d="M12 3a9 9 0 0 1 8.495 11.973l-8.495 -2.973v-9" fill="currentColor" stroke="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    </svg>
  )
);

Percentage30OutlineLogo.displayName = "Percentage30OutlineLogo";

export const Percentage30OutlineLogoMetadata = {
  id: "percentage-30-outline",
  baseId: "percentage-30-outline",
  variant: "default",
  name: "Percentage 30 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Percentage30OutlineLogo;
