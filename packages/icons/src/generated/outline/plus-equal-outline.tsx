/**
 * Auto-generated logo component: Plus Equal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PlusEqualOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PlusEqualOutlineLogo = React.forwardRef<SVGSVGElement, PlusEqualOutlineLogoProps>(
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
      <path d="M4 7h6" />
  <path d="M7 4v6" />
  <path d="M20 16h-6" />
  <path d="M20 19h-6" />
  <path d="M5 19l14 -14" />
    </svg>
  )
);

PlusEqualOutlineLogo.displayName = "PlusEqualOutlineLogo";

export const PlusEqualOutlineLogoMetadata = {
  id: "plus-equal-outline",
  baseId: "plus-equal-outline",
  variant: "default",
  name: "Plus Equal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PlusEqualOutlineLogo;
