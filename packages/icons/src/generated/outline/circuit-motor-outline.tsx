/**
 * Auto-generated logo component: Circuit Motor Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircuitMotorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircuitMotorOutlineLogo = React.forwardRef<SVGSVGElement, CircuitMotorOutlineLogoProps>(
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
  <path d="M10 14v-4l2 2l2 -2v4" />
    </svg>
  )
);

CircuitMotorOutlineLogo.displayName = "CircuitMotorOutlineLogo";

export const CircuitMotorOutlineLogoMetadata = {
  id: "circuit-motor-outline",
  baseId: "circuit-motor-outline",
  variant: "default",
  name: "Circuit Motor Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircuitMotorOutlineLogo;
