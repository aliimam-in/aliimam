/**
 * Auto-generated logo component: Grave Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GraveOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GraveOutlineLogo = React.forwardRef<SVGSVGElement, GraveOutlineLogoProps>(
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
      <path d="M5 21v-2a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v2h-14" />
  <path d="M10 16v-5h-4v-4h4v-4h4v4h4v4h-4v5" />
    </svg>
  )
);

GraveOutlineLogo.displayName = "GraveOutlineLogo";

export const GraveOutlineLogoMetadata = {
  id: "grave-outline",
  baseId: "grave-outline",
  variant: "default",
  name: "Grave Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GraveOutlineLogo;
