/**
 * Auto-generated logo component: Sunrise Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SunriseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SunriseOutlineLogo = React.forwardRef<SVGSVGElement, SunriseOutlineLogoProps>(
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
      <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
  <path d="M3 21l18 0" />
  <path d="M12 9v-6l3 3m-6 0l3 -3" />
    </svg>
  )
);

SunriseOutlineLogo.displayName = "SunriseOutlineLogo";

export const SunriseOutlineLogoMetadata = {
  id: "sunrise-outline",
  baseId: "sunrise-outline",
  variant: "default",
  name: "Sunrise Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SunriseOutlineLogo;
