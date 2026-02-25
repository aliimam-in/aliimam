/**
 * Auto-generated logo component: Sun Moon Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SunMoonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SunMoonOutlineLogo = React.forwardRef<SVGSVGElement, SunMoonOutlineLogoProps>(
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
      <path d="M9.173 14.83a4 4 0 1 1 5.657 -5.657" />
  <path d="M11.294 12.707l.174 .247a7.5 7.5 0 0 0 8.845 2.492a9 9 0 0 1 -14.671 2.914" />
  <path d="M3 12h1" />
  <path d="M12 3v1" />
  <path d="M5.6 5.6l.7 .7" />
  <path d="M3 21l18 -18" />
    </svg>
  )
);

SunMoonOutlineLogo.displayName = "SunMoonOutlineLogo";

export const SunMoonOutlineLogoMetadata = {
  id: "sun-moon-outline",
  baseId: "sun-moon-outline",
  variant: "default",
  name: "Sun Moon Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SunMoonOutlineLogo;
