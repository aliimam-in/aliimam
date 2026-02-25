/**
 * Auto-generated logo component: Decimal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DecimalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DecimalOutlineLogo = React.forwardRef<SVGSVGElement, DecimalOutlineLogoProps>(
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
      <path d="M17 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" />
  <path d="M10 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" />
  <path d="M5 16h.01" />
    </svg>
  )
);

DecimalOutlineLogo.displayName = "DecimalOutlineLogo";

export const DecimalOutlineLogoMetadata = {
  id: "decimal-outline",
  baseId: "decimal-outline",
  variant: "default",
  name: "Decimal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DecimalOutlineLogo;
