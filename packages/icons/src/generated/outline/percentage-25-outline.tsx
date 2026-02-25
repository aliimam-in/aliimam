/**
 * Auto-generated logo component: Percentage 25 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Percentage25OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Percentage25OutlineLogo = React.forwardRef<SVGSVGElement, Percentage25OutlineLogoProps>(
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
      <path d="M21 12a9 9 0 0 0 -9 -9m0 0v9h9" fill="currentColor" stroke="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    </svg>
  )
);

Percentage25OutlineLogo.displayName = "Percentage25OutlineLogo";

export const Percentage25OutlineLogoMetadata = {
  id: "percentage-25-outline",
  baseId: "percentage-25-outline",
  variant: "default",
  name: "Percentage 25 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Percentage25OutlineLogo;
