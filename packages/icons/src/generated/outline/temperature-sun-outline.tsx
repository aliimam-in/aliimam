/**
 * Auto-generated logo component: Temperature Sun Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TemperatureSunOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TemperatureSunOutlineLogo = React.forwardRef<SVGSVGElement, TemperatureSunOutlineLogoProps>(
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
  <path d="M13 16a4 4 0 1 0 0 -8a4.07 4.07 0 0 0 -1 .124" />
  <path d="M13 3v1" />
  <path d="M21 12h1" />
  <path d="M13 20v1" />
  <path d="M19.4 5.6l-.7 .7" />
  <path d="M18.7 17.7l.7 .7" />
    </svg>
  )
);

TemperatureSunOutlineLogo.displayName = "TemperatureSunOutlineLogo";

export const TemperatureSunOutlineLogoMetadata = {
  id: "temperature-sun-outline",
  baseId: "temperature-sun-outline",
  variant: "default",
  name: "Temperature Sun Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TemperatureSunOutlineLogo;
