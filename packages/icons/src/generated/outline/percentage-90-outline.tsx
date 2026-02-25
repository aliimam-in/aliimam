/**
 * Auto-generated logo component: Percentage 90 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Percentage90OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Percentage90OutlineLogo = React.forwardRef<SVGSVGElement, Percentage90OutlineLogoProps>(
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
      <path d="M12 3a9 9 0 1 1 -5.16 1.626l5.16 7.374v-9" fill="currentColor" stroke="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    </svg>
  )
);

Percentage90OutlineLogo.displayName = "Percentage90OutlineLogo";

export const Percentage90OutlineLogoMetadata = {
  id: "percentage-90-outline",
  baseId: "percentage-90-outline",
  variant: "default",
  name: "Percentage 90 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Percentage90OutlineLogo;
