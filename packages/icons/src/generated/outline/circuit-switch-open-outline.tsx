/**
 * Auto-generated logo component: Circuit Switch Open Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitSwitchOpenOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitSwitchOpenOutlineLogo = React.forwardRef<SVGSVGElement, CircuitSwitchOpenOutlineLogoProps>(
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
      <path d="M2 12h2" />
  <path d="M20 12h2" />
  <path d="M4 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M16 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7.5 10.5l7.5 -5.5" />
    </svg>
  )
);

CircuitSwitchOpenOutlineLogo.displayName = "CircuitSwitchOpenOutlineLogo";

export const CircuitSwitchOpenOutlineLogoMetadata = {
  id: "circuit-switch-open-outline",
  baseId: "circuit-switch-open-outline",
  variant: "default",
  name: "Circuit Switch Open Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitSwitchOpenOutlineLogo;
