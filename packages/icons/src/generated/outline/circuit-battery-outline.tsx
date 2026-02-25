/**
 * Auto-generated logo component: Circuit Battery Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitBatteryOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitBatteryOutlineLogo = React.forwardRef<SVGSVGElement, CircuitBatteryOutlineLogoProps>(
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
      <path d="M2 12h4" />
  <path d="M18 12h4" />
  <path d="M18 5v14" />
  <path d="M14 9v6" />
  <path d="M10 5v14" />
  <path d="M6 9v6" />
    </svg>
  )
);

CircuitBatteryOutlineLogo.displayName = "CircuitBatteryOutlineLogo";

export const CircuitBatteryOutlineLogoMetadata = {
  id: "circuit-battery-outline",
  baseId: "circuit-battery-outline",
  variant: "default",
  name: "Circuit Battery Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitBatteryOutlineLogo;
