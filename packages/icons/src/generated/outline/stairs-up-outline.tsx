/**
 * Auto-generated logo component: Stairs Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StairsUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StairsUpOutlineLogo = React.forwardRef<SVGSVGElement, StairsUpOutlineLogoProps>(
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
      <path d="M22 6h-5v5h-5v5h-5v5h-5" />
  <path d="M6 10v-7" />
  <path d="M3 6l3 -3l3 3" />
    </svg>
  )
);

StairsUpOutlineLogo.displayName = "StairsUpOutlineLogo";

export const StairsUpOutlineLogoMetadata = {
  id: "stairs-up-outline",
  baseId: "stairs-up-outline",
  variant: "default",
  name: "Stairs Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StairsUpOutlineLogo;
