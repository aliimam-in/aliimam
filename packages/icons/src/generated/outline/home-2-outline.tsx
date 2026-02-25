/**
 * Auto-generated logo component: Home 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Home2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Home2OutlineLogo = React.forwardRef<SVGSVGElement, Home2OutlineLogoProps>(
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
      <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
  <path d="M10 12h4v4h-4l0 -4" />
    </svg>
  )
);

Home2OutlineLogo.displayName = "Home2OutlineLogo";

export const Home2OutlineLogoMetadata = {
  id: "home-2-outline",
  baseId: "home-2-outline",
  variant: "default",
  name: "Home 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Home2OutlineLogo;
