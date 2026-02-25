/**
 * Auto-generated logo component: Circuit Ground Digital Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitGroundDigitalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitGroundDigitalOutlineLogo = React.forwardRef<SVGSVGElement, CircuitGroundDigitalOutlineLogoProps>(
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
      <path d="M12 13v-10" />
  <path d="M12 21l-6 -8h12l-6 8" />
    </svg>
  )
);

CircuitGroundDigitalOutlineLogo.displayName = "CircuitGroundDigitalOutlineLogo";

export const CircuitGroundDigitalOutlineLogoMetadata = {
  id: "circuit-ground-digital-outline",
  baseId: "circuit-ground-digital-outline",
  variant: "default",
  name: "Circuit Ground Digital Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitGroundDigitalOutlineLogo;
