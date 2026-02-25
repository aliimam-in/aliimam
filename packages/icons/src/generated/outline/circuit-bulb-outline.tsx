/**
 * Auto-generated logo component: Circuit Bulb Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitBulbOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitBulbOutlineLogo = React.forwardRef<SVGSVGElement, CircuitBulbOutlineLogoProps>(
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
      <path d="M2 12h5" />
  <path d="M17 12h5" />
  <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M8.5 8.5l7 7" />
  <path d="M15.5 8.5l-7 7" />
    </svg>
  )
);

CircuitBulbOutlineLogo.displayName = "CircuitBulbOutlineLogo";

export const CircuitBulbOutlineLogoMetadata = {
  id: "circuit-bulb-outline",
  baseId: "circuit-bulb-outline",
  variant: "default",
  name: "Circuit Bulb Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitBulbOutlineLogo;
