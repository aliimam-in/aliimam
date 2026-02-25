/**
 * Auto-generated logo component: Percentage 0 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Percentage0OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Percentage0OutlineLogo = React.forwardRef<SVGSVGElement, Percentage0OutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    </svg>
  )
);

Percentage0OutlineLogo.displayName = "Percentage0OutlineLogo";

export const Percentage0OutlineLogoMetadata = {
  id: "percentage-0-outline",
  baseId: "percentage-0-outline",
  variant: "default",
  name: "Percentage 0 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Percentage0OutlineLogo;
