/**
 * Auto-generated logo component: Grill Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GrillOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GrillOutlineLogo = React.forwardRef<SVGSVGElement, GrillOutlineLogoProps>(
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
      <path d="M19 8h-14a6 6 0 0 0 6 6h2a6 6 0 0 0 6 -5.775l0 -.225" />
  <path d="M17 20a2 2 0 1 1 0 -4a2 2 0 0 1 0 4" />
  <path d="M15 14l1 2" />
  <path d="M9 14l-3 6" />
  <path d="M15 18h-8" />
  <path d="M15 5v-1" />
  <path d="M12 5v-1" />
  <path d="M9 5v-1" />
    </svg>
  )
);

GrillOutlineLogo.displayName = "GrillOutlineLogo";

export const GrillOutlineLogoMetadata = {
  id: "grill-outline",
  baseId: "grill-outline",
  variant: "default",
  name: "Grill Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GrillOutlineLogo;
