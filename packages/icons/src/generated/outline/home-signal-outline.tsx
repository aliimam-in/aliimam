/**
 * Auto-generated logo component: Home Signal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeSignalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeSignalOutlineLogo = React.forwardRef<SVGSVGElement, HomeSignalOutlineLogoProps>(
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
      <path d="M15 22v-2" />
  <path d="M18 22v-4" />
  <path d="M21 22v-6" />
  <path d="M19 12.494v-.494h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v.5" />
    </svg>
  )
);

HomeSignalOutlineLogo.displayName = "HomeSignalOutlineLogo";

export const HomeSignalOutlineLogoMetadata = {
  id: "home-signal-outline",
  baseId: "home-signal-outline",
  variant: "default",
  name: "Home Signal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeSignalOutlineLogo;
