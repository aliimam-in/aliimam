/**
 * Auto-generated logo component: Temperature Fahrenheit Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TemperatureFahrenheitOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TemperatureFahrenheitOutlineLogo = React.forwardRef<SVGSVGElement, TemperatureFahrenheitOutlineLogoProps>(
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
      <path d="M4 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M13 12l5 0" />
  <path d="M20 6h-6a1 1 0 0 0 -1 1v11" />
    </svg>
  )
);

TemperatureFahrenheitOutlineLogo.displayName = "TemperatureFahrenheitOutlineLogo";

export const TemperatureFahrenheitOutlineLogoMetadata = {
  id: "temperature-fahrenheit-outline",
  baseId: "temperature-fahrenheit-outline",
  variant: "default",
  name: "Temperature Fahrenheit Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TemperatureFahrenheitOutlineLogo;
