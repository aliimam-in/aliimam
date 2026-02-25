/**
 * Auto-generated logo component: Bell Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BellMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BellMinusOutlineLogo = React.forwardRef<SVGSVGElement, BellMinusOutlineLogoProps>(
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
      <path d="M12.5 17h-8.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3c.047 .386 .149 .758 .3 1.107" />
  <path d="M9 17v1a3 3 0 0 0 3.504 2.958" />
  <path d="M16 19h6" />
    </svg>
  )
);

BellMinusOutlineLogo.displayName = "BellMinusOutlineLogo";

export const BellMinusOutlineLogoMetadata = {
  id: "bell-minus-outline",
  baseId: "bell-minus-outline",
  variant: "default",
  name: "Bell Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BellMinusOutlineLogo;
