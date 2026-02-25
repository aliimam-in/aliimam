/**
 * Auto-generated logo component: Universe Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UniverseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UniverseOutlineLogo = React.forwardRef<SVGSVGElement, UniverseOutlineLogoProps>(
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
      <path d="M7.027 11.477a5 5 0 1 0 5.496 -4.45a4.951 4.951 0 0 0 -3.088 .681" />
  <path d="M5.636 5.636a9 9 0 1 0 3.555 -2.188" />
  <path d="M17 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M8 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

UniverseOutlineLogo.displayName = "UniverseOutlineLogo";

export const UniverseOutlineLogoMetadata = {
  id: "universe-outline",
  baseId: "universe-outline",
  variant: "default",
  name: "Universe Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UniverseOutlineLogo;
