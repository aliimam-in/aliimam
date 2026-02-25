/**
 * Auto-generated logo component: Hamburger (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HamburgerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HamburgerLogo = React.forwardRef<SVGSVGElement, HamburgerLogoProps>(
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
      <path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25" />
  <path d="M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2" />
  <path d="M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0" />
  <path d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
    </svg>
  )
);

HamburgerLogo.displayName = "HamburgerLogo";

export const HamburgerLogoMetadata = {
  id: "hamburger",
  baseId: "hamburger",
  variant: "default",
  name: "Hamburger",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HamburgerLogo;
