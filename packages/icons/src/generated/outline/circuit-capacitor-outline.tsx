/**
 * Auto-generated logo component: Circuit Capacitor Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitCapacitorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitCapacitorOutlineLogo = React.forwardRef<SVGSVGElement, CircuitCapacitorOutlineLogoProps>(
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
    </svg>
  )
);

CircuitCapacitorOutlineLogo.displayName = "CircuitCapacitorOutlineLogo";

export const CircuitCapacitorOutlineLogoMetadata = {
  id: "circuit-capacitor-outline",
  baseId: "circuit-capacitor-outline",
  variant: "default",
  name: "Circuit Capacitor Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitCapacitorOutlineLogo;
