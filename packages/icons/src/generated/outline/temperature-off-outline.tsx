/**
 * Auto-generated logo component: Temperature Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TemperatureOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TemperatureOffOutlineLogo = React.forwardRef<SVGSVGElement, TemperatureOffOutlineLogoProps>(
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
      <path d="M10 10v3.5a4 4 0 1 0 5.836 2.33m-1.836 -5.83v-5a2 2 0 1 0 -4 0v1" />
  <path d="M13 9h1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

TemperatureOffOutlineLogo.displayName = "TemperatureOffOutlineLogo";

export const TemperatureOffOutlineLogoMetadata = {
  id: "temperature-off-outline",
  baseId: "temperature-off-outline",
  variant: "default",
  name: "Temperature Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TemperatureOffOutlineLogo;
