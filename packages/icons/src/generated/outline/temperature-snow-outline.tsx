/**
 * Auto-generated logo component: Temperature Snow Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TemperatureSnowOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TemperatureSnowOutlineLogo = React.forwardRef<SVGSVGElement, TemperatureSnowOutlineLogoProps>(
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
      <path d="M4 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 1 0 -4 0v8.5" />
  <path d="M4 9h4" />
  <path d="M14.75 4l1 2h2.25" />
  <path d="M17 4l-3 5l2 3" />
  <path d="M20.25 10l-1.25 2l1.25 2" />
  <path d="M22 12h-6l-2 3" />
  <path d="M18 18h-2.25l-1 2" />
  <path d="M17 20l-3 -5h-1" />
  <path d="M12 9l2.088 .008" />
    </svg>
  )
);

TemperatureSnowOutlineLogo.displayName = "TemperatureSnowOutlineLogo";

export const TemperatureSnowOutlineLogoMetadata = {
  id: "temperature-snow-outline",
  baseId: "temperature-snow-outline",
  variant: "default",
  name: "Temperature Snow Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TemperatureSnowOutlineLogo;
