/**
 * Auto-generated logo component: Sun (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SunLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SunLogo = React.forwardRef<SVGSVGElement, SunLogoProps>(
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
      <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
);

SunLogo.displayName = "SunLogo";

export const SunLogoMetadata = {
  id: "sun",
  baseId: "sun",
  variant: "default",
  name: "Sun",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SunLogo;
