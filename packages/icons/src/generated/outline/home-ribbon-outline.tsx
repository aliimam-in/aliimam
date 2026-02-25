/**
 * Auto-generated logo component: Home Ribbon Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeRibbonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeRibbonOutlineLogo = React.forwardRef<SVGSVGElement, HomeRibbonOutlineLogoProps>(
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
      <path d="M16 15h5v7l-2.5 -1.5l-2.5 1.5l0 -7" />
  <path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h1.5" />
    </svg>
  )
);

HomeRibbonOutlineLogo.displayName = "HomeRibbonOutlineLogo";

export const HomeRibbonOutlineLogoMetadata = {
  id: "home-ribbon-outline",
  baseId: "home-ribbon-outline",
  variant: "default",
  name: "Home Ribbon Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeRibbonOutlineLogo;
