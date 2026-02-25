/**
 * Auto-generated logo component: Circuit Ground Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitGroundOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitGroundOutlineLogo = React.forwardRef<SVGSVGElement, CircuitGroundOutlineLogoProps>(
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
      <path d="M12 13v-8" />
  <path d="M4 13h16" />
  <path d="M7 16h10" />
  <path d="M10 19h4" />
    </svg>
  )
);

CircuitGroundOutlineLogo.displayName = "CircuitGroundOutlineLogo";

export const CircuitGroundOutlineLogoMetadata = {
  id: "circuit-ground-outline",
  baseId: "circuit-ground-outline",
  variant: "default",
  name: "Circuit Ground Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitGroundOutlineLogo;
