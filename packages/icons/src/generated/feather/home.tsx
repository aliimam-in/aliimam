/**
 * Auto-generated logo component: Home (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeLogo = React.forwardRef<SVGSVGElement, HomeLogoProps>(
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
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
);

HomeLogo.displayName = "HomeLogo";

export const HomeLogoMetadata = {
  id: "home",
  baseId: "home",
  variant: "default",
  name: "Home",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeLogo;
