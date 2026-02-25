/**
 * Auto-generated logo component: Home Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeCheckOutlineLogo = React.forwardRef<SVGSVGElement, HomeCheckOutlineLogoProps>(
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
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" />
  <path d="M19 13.488v-1.488h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4.525" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

HomeCheckOutlineLogo.displayName = "HomeCheckOutlineLogo";

export const HomeCheckOutlineLogoMetadata = {
  id: "home-check-outline",
  baseId: "home-check-outline",
  variant: "default",
  name: "Home Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeCheckOutlineLogo;
