/**
 * Auto-generated logo component: Temperature Celsius Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TemperatureCelsiusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TemperatureCelsiusOutlineLogo = React.forwardRef<SVGSVGElement, TemperatureCelsiusOutlineLogoProps>(
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
  <path d="M20 9a3 3 0 0 0 -3 -3h-1a3 3 0 0 0 -3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3 -3" />
    </svg>
  )
);

TemperatureCelsiusOutlineLogo.displayName = "TemperatureCelsiusOutlineLogo";

export const TemperatureCelsiusOutlineLogoMetadata = {
  id: "temperature-celsius-outline",
  baseId: "temperature-celsius-outline",
  variant: "default",
  name: "Temperature Celsius Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TemperatureCelsiusOutlineLogo;
