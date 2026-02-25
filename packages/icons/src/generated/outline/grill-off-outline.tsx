/**
 * Auto-generated logo component: Grill Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GrillOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GrillOffOutlineLogo = React.forwardRef<SVGSVGElement, GrillOffOutlineLogoProps>(
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
      <path d="M8 8h-3a6 6 0 0 0 6 6h2c.315 0 .624 -.024 .926 -.071m2.786 -1.214a5.99 5.99 0 0 0 2.284 -4.49l0 -.225h-7" />
  <path d="M18.827 18.815a2 2 0 1 1 -2.663 -2.633" />
  <path d="M9 14l-3 6" />
  <path d="M15 18h-8" />
  <path d="M15 5v-1" />
  <path d="M12 5v-1" />
  <path d="M9 5v-1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

GrillOffOutlineLogo.displayName = "GrillOffOutlineLogo";

export const GrillOffOutlineLogoMetadata = {
  id: "grill-off-outline",
  baseId: "grill-off-outline",
  variant: "default",
  name: "Grill Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GrillOffOutlineLogo;
