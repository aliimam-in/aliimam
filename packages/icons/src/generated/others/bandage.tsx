/**
 * Auto-generated logo component: Bandage (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BandageLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BandageLogo = React.forwardRef<SVGSVGElement, BandageLogoProps>(
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
      <path d="M10 10.01h.01" />
  <path d="M10 14.01h.01" />
  <path d="M14 10.01h.01" />
  <path d="M14 14.01h.01" />
  <path d="M18 6v12" />
  <path d="M6 6v12" />
  <rect x="2" y="6" width="20" height="12" rx="2" />
    </svg>
  )
);

BandageLogo.displayName = "BandageLogo";

export const BandageLogoMetadata = {
  id: "bandage",
  baseId: "bandage",
  variant: "default",
  name: "Bandage",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BandageLogo;
