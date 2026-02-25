/**
 * Auto-generated logo component: Armchair 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Armchair2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Armchair2OutlineLogo = React.forwardRef<SVGSVGElement, Armchair2OutlineLogoProps>(
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
      <path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" />
  <path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2" />
  <path d="M8 12h8" />
  <path d="M7 19v2" />
  <path d="M17 19v2" />
    </svg>
  )
);

Armchair2OutlineLogo.displayName = "Armchair2OutlineLogo";

export const Armchair2OutlineLogoMetadata = {
  id: "armchair-2-outline",
  baseId: "armchair-2-outline",
  variant: "default",
  name: "Armchair 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Armchair2OutlineLogo;
