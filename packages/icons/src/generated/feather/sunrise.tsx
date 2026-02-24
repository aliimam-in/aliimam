/**
 * Auto-generated logo component: Sunrise (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SunriseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SunriseLogo = React.forwardRef<SVGSVGElement, SunriseLogoProps>(
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
      <path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/><line x1="1" y1="18" x2="3" y2="18"/><line x1="21" y1="18" x2="23" y2="18"/><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/><line x1="23" y1="22" x2="1" y2="22"/><polyline points="8 6 12 2 16 6"/>
    </svg>
  )
);

SunriseLogo.displayName = "SunriseLogo";

export const SunriseLogoMetadata = {
  id: "sunrise",
  baseId: "sunrise",
  variant: "default",
  name: "Sunrise",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SunriseLogo;
