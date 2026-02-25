/**
 * Auto-generated logo component: Circuit Diode Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitDiodeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitDiodeOutlineLogo = React.forwardRef<SVGSVGElement, CircuitDiodeOutlineLogoProps>(
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
      <path d="M22 12h-6" />
  <path d="M2 12h6" />
  <path d="M8 7l8 5l-8 5l0 -10" />
  <path d="M16 7v10" />
    </svg>
  )
);

CircuitDiodeOutlineLogo.displayName = "CircuitDiodeOutlineLogo";

export const CircuitDiodeOutlineLogoMetadata = {
  id: "circuit-diode-outline",
  baseId: "circuit-diode-outline",
  variant: "default",
  name: "Circuit Diode Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitDiodeOutlineLogo;
