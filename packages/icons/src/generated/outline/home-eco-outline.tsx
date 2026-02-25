/**
 * Auto-generated logo component: Home Eco Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeEcoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeEcoOutlineLogo = React.forwardRef<SVGSVGElement, HomeEcoOutlineLogoProps>(
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
      <path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.325 0 .631 .077 .902 .215" />
  <path d="M16 22s0 -2 3 -4" />
  <path d="M19 21a3 3 0 0 1 0 -6h3v3a3 3 0 0 1 -3 3" />
    </svg>
  )
);

HomeEcoOutlineLogo.displayName = "HomeEcoOutlineLogo";

export const HomeEcoOutlineLogoMetadata = {
  id: "home-eco-outline",
  baseId: "home-eco-outline",
  variant: "default",
  name: "Home Eco Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeEcoOutlineLogo;
