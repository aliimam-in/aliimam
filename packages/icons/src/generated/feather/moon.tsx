/**
 * Auto-generated logo component: Moon (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoonLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoonLogo = React.forwardRef<SVGSVGElement, MoonLogoProps>(
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
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
);

MoonLogo.displayName = "MoonLogo";

export const MoonLogoMetadata = {
  id: "moon",
  baseId: "moon",
  variant: "default",
  name: "Moon",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoonLogo;
