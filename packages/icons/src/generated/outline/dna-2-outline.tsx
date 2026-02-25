/**
 * Auto-generated logo component: Dna 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Dna2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Dna2OutlineLogo = React.forwardRef<SVGSVGElement, Dna2OutlineLogoProps>(
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
      <path d="M17 3v1c-.01 3.352 -1.68 6.023 -5.008 8.014c-3.328 1.99 3.336 -2 .008 -.014c-3.328 1.99 -5 4.662 -5.008 8.014v1" />
  <path d="M17 21.014v-1c-.01 -3.352 -1.68 -6.023 -5.008 -8.014c-3.328 -1.99 3.336 2 .008 .014c-3.328 -1.991 -5 -4.662 -5.008 -8.014v-1" />
  <path d="M7 4h10" />
  <path d="M7 20h10" />
  <path d="M8 8h8" />
  <path d="M8 16h8" />
    </svg>
  )
);

Dna2OutlineLogo.displayName = "Dna2OutlineLogo";

export const Dna2OutlineLogoMetadata = {
  id: "dna-2-outline",
  baseId: "dna-2-outline",
  variant: "default",
  name: "Dna 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Dna2OutlineLogo;
