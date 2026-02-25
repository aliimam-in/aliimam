/**
 * Auto-generated logo component: Circuit Inductor Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitInductorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitInductorOutlineLogo = React.forwardRef<SVGSVGElement, CircuitInductorOutlineLogoProps>(
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
      <path d="M2 14h3v-2a2 2 0 1 1 4 0v2v-1.5a2.5 2.5 0 1 1 5 0v1.5v-1.5a2.5 2.5 0 1 1 5 0v1.5h3" />
    </svg>
  )
);

CircuitInductorOutlineLogo.displayName = "CircuitInductorOutlineLogo";

export const CircuitInductorOutlineLogoMetadata = {
  id: "circuit-inductor-outline",
  baseId: "circuit-inductor-outline",
  variant: "default",
  name: "Circuit Inductor Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitInductorOutlineLogo;
