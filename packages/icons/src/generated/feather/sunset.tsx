/**
 * Auto-generated logo component: Sunset (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SunsetLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SunsetLogo = React.forwardRef<SVGSVGElement, SunsetLogoProps>(
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
      <path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="9" x2="12" y2="2"/><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/><line x1="1" y1="18" x2="3" y2="18"/><line x1="21" y1="18" x2="23" y2="18"/><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/><line x1="23" y1="22" x2="1" y2="22"/><polyline points="16 5 12 9 8 5"/>
    </svg>
  )
);

SunsetLogo.displayName = "SunsetLogo";

export const SunsetLogoMetadata = {
  id: "sunset",
  baseId: "sunset",
  variant: "default",
  name: "Sunset",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SunsetLogo;
