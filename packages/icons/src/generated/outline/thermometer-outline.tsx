/**
 * Auto-generated logo component: Thermometer Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ThermometerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ThermometerOutlineLogo = React.forwardRef<SVGSVGElement, ThermometerOutlineLogoProps>(
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
      <path d="M19 5a2.828 2.828 0 0 1 0 4l-8 8h-4v-4l8 -8a2.828 2.828 0 0 1 4 0" />
  <path d="M16 7l-1.5 -1.5" />
  <path d="M13 10l-1.5 -1.5" />
  <path d="M10 13l-1.5 -1.5" />
  <path d="M7 17l-3 3" />
    </svg>
  )
);

ThermometerOutlineLogo.displayName = "ThermometerOutlineLogo";

export const ThermometerOutlineLogoMetadata = {
  id: "thermometer-outline",
  baseId: "thermometer-outline",
  variant: "default",
  name: "Thermometer Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ThermometerOutlineLogo;
