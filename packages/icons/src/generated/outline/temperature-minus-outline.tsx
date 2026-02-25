/**
 * Auto-generated logo component: Temperature Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TemperatureMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TemperatureMinusOutlineLogo = React.forwardRef<SVGSVGElement, TemperatureMinusOutlineLogoProps>(
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
      <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
  <path d="M8 9l4 0" />
  <path d="M16 9l6 0" />
    </svg>
  )
);

TemperatureMinusOutlineLogo.displayName = "TemperatureMinusOutlineLogo";

export const TemperatureMinusOutlineLogoMetadata = {
  id: "temperature-minus-outline",
  baseId: "temperature-minus-outline",
  variant: "default",
  name: "Temperature Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TemperatureMinusOutlineLogo;
