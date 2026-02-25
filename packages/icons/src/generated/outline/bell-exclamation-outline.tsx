/**
 * Auto-generated logo component: Bell Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BellExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BellExclamationOutlineLogo = React.forwardRef<SVGSVGElement, BellExclamationOutlineLogoProps>(
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
      <path d="M15 17h-11a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v1.5" />
  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

BellExclamationOutlineLogo.displayName = "BellExclamationOutlineLogo";

export const BellExclamationOutlineLogoMetadata = {
  id: "bell-exclamation-outline",
  baseId: "bell-exclamation-outline",
  variant: "default",
  name: "Bell Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BellExclamationOutlineLogo;
