/**
 * Auto-generated logo component: Bath Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BathOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BathOutlineLogo = React.forwardRef<SVGSVGElement, BathOutlineLogoProps>(
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
      <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1" />
  <path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" />
  <path d="M4 21l1 -1.5" />
  <path d="M20 21l-1 -1.5" />
    </svg>
  )
);

BathOutlineLogo.displayName = "BathOutlineLogo";

export const BathOutlineLogoMetadata = {
  id: "bath-outline",
  baseId: "bath-outline",
  variant: "default",
  name: "Bath Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BathOutlineLogo;
