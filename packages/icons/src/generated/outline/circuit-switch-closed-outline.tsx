/**
 * Auto-generated logo component: Circuit Switch Closed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitSwitchClosedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitSwitchClosedOutlineLogo = React.forwardRef<SVGSVGElement, CircuitSwitchClosedOutlineLogoProps>(
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
  <path d="M8 12h8" />
    </svg>
  )
);

CircuitSwitchClosedOutlineLogo.displayName = "CircuitSwitchClosedOutlineLogo";

export const CircuitSwitchClosedOutlineLogoMetadata = {
  id: "circuit-switch-closed-outline",
  baseId: "circuit-switch-closed-outline",
  variant: "default",
  name: "Circuit Switch Closed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitSwitchClosedOutlineLogo;
