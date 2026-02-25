/**
 * Auto-generated logo component: Abacus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AbacusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AbacusOutlineLogo = React.forwardRef<SVGSVGElement, AbacusOutlineLogoProps>(
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
      <path d="M5 3v18" />
  <path d="M19 21v-18" />
  <path d="M5 7h14" />
  <path d="M5 15h14" />
  <path d="M8 13v4" />
  <path d="M11 13v4" />
  <path d="M16 13v4" />
  <path d="M14 5v4" />
  <path d="M11 5v4" />
  <path d="M8 5v4" />
  <path d="M3 21h18" />
    </svg>
  )
);

AbacusOutlineLogo.displayName = "AbacusOutlineLogo";

export const AbacusOutlineLogoMetadata = {
  id: "abacus-outline",
  baseId: "abacus-outline",
  variant: "default",
  name: "Abacus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AbacusOutlineLogo;
