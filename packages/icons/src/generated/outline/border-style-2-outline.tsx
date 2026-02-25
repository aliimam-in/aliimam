/**
 * Auto-generated logo component: Border Style 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BorderStyle2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BorderStyle2OutlineLogo = React.forwardRef<SVGSVGElement, BorderStyle2OutlineLogoProps>(
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
      <path d="M4 18v.01" />
  <path d="M8 18v.01" />
  <path d="M12 18v.01" />
  <path d="M16 18v.01" />
  <path d="M20 18v.01" />
  <path d="M18 12h2" />
  <path d="M11 12h2" />
  <path d="M4 12h2" />
  <path d="M4 6h16" />
    </svg>
  )
);

BorderStyle2OutlineLogo.displayName = "BorderStyle2OutlineLogo";

export const BorderStyle2OutlineLogoMetadata = {
  id: "border-style-2-outline",
  baseId: "border-style-2-outline",
  variant: "default",
  name: "Border Style 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BorderStyle2OutlineLogo;
