/**
 * Auto-generated logo component: Circuit Capacitor Polarized Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitCapacitorPolarizedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitCapacitorPolarizedOutlineLogo = React.forwardRef<SVGSVGElement, CircuitCapacitorPolarizedOutlineLogoProps>(
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
      <path d="M22 12h-8" />
  <path d="M2 12h8" />
  <path d="M10 7v10" />
  <path d="M14 7v10" />
  <path d="M17 5h4" />
  <path d="M19 3v4" />
    </svg>
  )
);

CircuitCapacitorPolarizedOutlineLogo.displayName = "CircuitCapacitorPolarizedOutlineLogo";

export const CircuitCapacitorPolarizedOutlineLogoMetadata = {
  id: "circuit-capacitor-polarized-outline",
  baseId: "circuit-capacitor-polarized-outline",
  variant: "default",
  name: "Circuit Capacitor Polarized Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitCapacitorPolarizedOutlineLogo;
