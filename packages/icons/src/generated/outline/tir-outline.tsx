/**
 * Auto-generated logo component: Tir Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TirOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TirOutlineLogo = React.forwardRef<SVGSVGElement, TirOutlineLogoProps>(
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
      <path d="M3 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 18h8m4 0h2v-6a5 7 0 0 0 -5 -7h-1l1.5 7h4.5" />
  <path d="M12 18v-13h3" />
  <path d="M3 17l0 -5l9 0" />
    </svg>
  )
);

TirOutlineLogo.displayName = "TirOutlineLogo";

export const TirOutlineLogoMetadata = {
  id: "tir-outline",
  baseId: "tir-outline",
  variant: "default",
  name: "Tir Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TirOutlineLogo;
