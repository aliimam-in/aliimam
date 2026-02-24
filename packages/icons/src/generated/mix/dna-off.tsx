/**
 * Auto-generated logo component: Dna Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DnaOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DnaOffLogo = React.forwardRef<SVGSVGElement, DnaOffLogoProps>(
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
      <path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" />
  <path d="m17 6-2.891-2.891" />
  <path d="M2 15c3.333-3 6.667-3 10-3" />
  <path d="m2 2 20 20" />
  <path d="m20 9 .891.891" />
  <path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" />
  <path d="M3.109 14.109 4 15" />
  <path d="m6.5 12.5 1 1" />
  <path d="m7 18 2.891 2.891" />
  <path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" />
    </svg>
  )
);

DnaOffLogo.displayName = "DnaOffLogo";

export const DnaOffLogoMetadata = {
  id: "dna-off",
  baseId: "dna-off",
  variant: "default",
  name: "Dna Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DnaOffLogo;
