/**
 * Auto-generated logo component: Paw Print (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PawPrintLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PawPrintLogo = React.forwardRef<SVGSVGElement, PawPrintLogoProps>(
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
      <circle cx="11" cy="4" r="2" />
  <circle cx="18" cy="8" r="2" />
  <circle cx="20" cy="16" r="2" />
  <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>
  )
);

PawPrintLogo.displayName = "PawPrintLogo";

export const PawPrintLogoMetadata = {
  id: "paw-print",
  baseId: "paw-print",
  variant: "default",
  name: "Paw Print",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PawPrintLogo;
