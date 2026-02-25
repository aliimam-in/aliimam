/**
 * Auto-generated logo component: Percentage 50 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Percentage50OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Percentage50OutlineLogo = React.forwardRef<SVGSVGElement, Percentage50OutlineLogoProps>(
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
      <path d="M12 21a9 9 0 0 0 0 -18m0 0v18" fill="currentColor" stroke="none" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    </svg>
  )
);

Percentage50OutlineLogo.displayName = "Percentage50OutlineLogo";

export const Percentage50OutlineLogoMetadata = {
  id: "percentage-50-outline",
  baseId: "percentage-50-outline",
  variant: "default",
  name: "Percentage 50 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Percentage50OutlineLogo;
