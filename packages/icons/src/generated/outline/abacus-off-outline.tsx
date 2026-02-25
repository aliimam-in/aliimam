/**
 * Auto-generated logo component: Abacus Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AbacusOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AbacusOffOutlineLogo = React.forwardRef<SVGSVGElement, AbacusOffOutlineLogoProps>(
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
      <path d="M5 5v16" />
  <path d="M19 21v-2m0 -4v-12" />
  <path d="M5 7h2m4 0h8" />
  <path d="M5 15h10" />
  <path d="M8 13v4" />
  <path d="M11 13v4" />
  <path d="M16 16v1" />
  <path d="M14 5v4" />
  <path d="M11 5v2" />
  <path d="M8 8v1" />
  <path d="M3 21h18" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

AbacusOffOutlineLogo.displayName = "AbacusOffOutlineLogo";

export const AbacusOffOutlineLogoMetadata = {
  id: "abacus-off-outline",
  baseId: "abacus-off-outline",
  variant: "default",
  name: "Abacus Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AbacusOffOutlineLogo;
