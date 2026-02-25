/**
 * Auto-generated logo component: H 1 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface H1OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const H1OutlineLogo = React.forwardRef<SVGSVGElement, H1OutlineLogoProps>(
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
      <path d="M19 18v-8l-2 2" />
  <path d="M4 6v12" />
  <path d="M12 6v12" />
  <path d="M11 18h2" />
  <path d="M3 18h2" />
  <path d="M4 12h8" />
  <path d="M3 6h2" />
  <path d="M11 6h2" />
    </svg>
  )
);

H1OutlineLogo.displayName = "H1OutlineLogo";

export const H1OutlineLogoMetadata = {
  id: "h-1-outline",
  baseId: "h-1-outline",
  variant: "default",
  name: "H 1 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default H1OutlineLogo;
