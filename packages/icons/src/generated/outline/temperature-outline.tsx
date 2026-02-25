/**
 * Auto-generated logo component: Temperature Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TemperatureOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TemperatureOutlineLogo = React.forwardRef<SVGSVGElement, TemperatureOutlineLogoProps>(
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
      <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
  <path d="M10 9l4 0" />
    </svg>
  )
);

TemperatureOutlineLogo.displayName = "TemperatureOutlineLogo";

export const TemperatureOutlineLogoMetadata = {
  id: "temperature-outline",
  baseId: "temperature-outline",
  variant: "default",
  name: "Temperature Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TemperatureOutlineLogo;
