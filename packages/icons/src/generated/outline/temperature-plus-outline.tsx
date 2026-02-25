/**
 * Auto-generated logo component: Temperature Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TemperaturePlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TemperaturePlusOutlineLogo = React.forwardRef<SVGSVGElement, TemperaturePlusOutlineLogoProps>(
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
  <path d="M19 6l0 6" />
    </svg>
  )
);

TemperaturePlusOutlineLogo.displayName = "TemperaturePlusOutlineLogo";

export const TemperaturePlusOutlineLogoMetadata = {
  id: "temperature-plus-outline",
  baseId: "temperature-plus-outline",
  variant: "default",
  name: "Temperature Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TemperaturePlusOutlineLogo;
