/**
 * Auto-generated logo component: Heater (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HeaterLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HeaterLogo = React.forwardRef<SVGSVGElement, HeaterLogoProps>(
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
      <path d="M11 8c2-3-2-3 0-6" />
  <path d="M15.5 8c2-3-2-3 0-6" />
  <path d="M6 10h.01" />
  <path d="M6 14h.01" />
  <path d="M10 16v-4" />
  <path d="M14 16v-4" />
  <path d="M18 16v-4" />
  <path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" />
  <path d="M5 20v2" />
  <path d="M19 20v2" />
    </svg>
  )
);

HeaterLogo.displayName = "HeaterLogo";

export const HeaterLogoMetadata = {
  id: "heater",
  baseId: "heater",
  variant: "default",
  name: "Heater",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HeaterLogo;
