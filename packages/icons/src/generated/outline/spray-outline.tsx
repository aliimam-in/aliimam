/**
 * Auto-generated logo component: Spray Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SprayOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SprayOutlineLogo = React.forwardRef<SVGSVGElement, SprayOutlineLogoProps>(
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
      <path d="M4 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2l0 -7" />
  <path d="M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4" />
  <path d="M15 7h.01" />
  <path d="M18 9h.01" />
  <path d="M18 5h.01" />
  <path d="M21 3h.01" />
  <path d="M21 7h.01" />
  <path d="M21 11h.01" />
  <path d="M10 7h1" />
    </svg>
  )
);

SprayOutlineLogo.displayName = "SprayOutlineLogo";

export const SprayOutlineLogoMetadata = {
  id: "spray-outline",
  baseId: "spray-outline",
  variant: "default",
  name: "Spray Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SprayOutlineLogo;
