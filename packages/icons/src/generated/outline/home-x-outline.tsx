/**
 * Auto-generated logo component: Home X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeXOutlineLogo = React.forwardRef<SVGSVGElement, HomeXOutlineLogoProps>(
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
      <path d="M19 13.4v-1.4h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.402 0 .777 .119 1.091 .323" />
  <path d="M21.5 21.5l-5 -5" />
  <path d="M16.5 21.5l5 -5" />
    </svg>
  )
);

HomeXOutlineLogo.displayName = "HomeXOutlineLogo";

export const HomeXOutlineLogoMetadata = {
  id: "home-x-outline",
  baseId: "home-x-outline",
  variant: "default",
  name: "Home X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeXOutlineLogo;
