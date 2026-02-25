/**
 * Auto-generated logo component: Circuit Diode Zener Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitDiodeZenerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitDiodeZenerOutlineLogo = React.forwardRef<SVGSVGElement, CircuitDiodeZenerOutlineLogoProps>(
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
  <path d="M14 7h2v10h2" />
    </svg>
  )
);

CircuitDiodeZenerOutlineLogo.displayName = "CircuitDiodeZenerOutlineLogo";

export const CircuitDiodeZenerOutlineLogoMetadata = {
  id: "circuit-diode-zener-outline",
  baseId: "circuit-diode-zener-outline",
  variant: "default",
  name: "Circuit Diode Zener Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitDiodeZenerOutlineLogo;
