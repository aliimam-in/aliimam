/**
 * Auto-generated logo component: Navigation 2 (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixNavigation2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixNavigation2Logo = React.forwardRef<SVGSVGElement, MixNavigation2LogoProps>(
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
      <polygon points="12 2 19 21 12 17 5 21 12 2" />
    </svg>
  )
);

MixNavigation2Logo.displayName = "MixNavigation2Logo";

export const MixNavigation2LogoMetadata = {
  id: "navigation-2",
  baseId: "navigation-2",
  variant: "default",
  name: "Navigation 2",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixNavigation2Logo;
