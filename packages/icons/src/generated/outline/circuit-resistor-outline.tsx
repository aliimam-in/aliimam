/**
 * Auto-generated logo component: Circuit Resistor Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitResistorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitResistorOutlineLogo = React.forwardRef<SVGSVGElement, CircuitResistorOutlineLogoProps>(
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
      <path d="M2 12h2l2 -5l3 10l3 -10l3 10l3 -10l1.5 5h2.5" />
    </svg>
  )
);

CircuitResistorOutlineLogo.displayName = "CircuitResistorOutlineLogo";

export const CircuitResistorOutlineLogoMetadata = {
  id: "circuit-resistor-outline",
  baseId: "circuit-resistor-outline",
  variant: "default",
  name: "Circuit Resistor Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitResistorOutlineLogo;
