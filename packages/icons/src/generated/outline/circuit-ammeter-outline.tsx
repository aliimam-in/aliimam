/**
 * Auto-generated logo component: Circuit Ammeter Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitAmmeterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitAmmeterOutlineLogo = React.forwardRef<SVGSVGElement, CircuitAmmeterOutlineLogoProps>(
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
      <path d="M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M5 12h-3" />
  <path d="M19 12h3" />
  <path d="M10 14v-3c0 -1.036 .895 -2 2 -2s2 .964 2 2v3" />
  <path d="M14 12h-4" />
    </svg>
  )
);

CircuitAmmeterOutlineLogo.displayName = "CircuitAmmeterOutlineLogo";

export const CircuitAmmeterOutlineLogoMetadata = {
  id: "circuit-ammeter-outline",
  baseId: "circuit-ammeter-outline",
  variant: "default",
  name: "Circuit Ammeter Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitAmmeterOutlineLogo;
