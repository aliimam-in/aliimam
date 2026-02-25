/**
 * Auto-generated logo component: Percentage 10 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Percentage10OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Percentage10OutlineLogo = React.forwardRef<SVGSVGElement, Percentage10OutlineLogoProps>(
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
      <path d="M12 3c1.92 0 3.7 .601 5.16 1.626l-5.16 7.374v-9" fill="currentColor" stroke="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    </svg>
  )
);

Percentage10OutlineLogo.displayName = "Percentage10OutlineLogo";

export const Percentage10OutlineLogoMetadata = {
  id: "percentage-10-outline",
  baseId: "percentage-10-outline",
  variant: "default",
  name: "Percentage 10 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Percentage10OutlineLogo;
