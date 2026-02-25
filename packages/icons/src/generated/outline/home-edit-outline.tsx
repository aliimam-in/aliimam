/**
 * Auto-generated logo component: Home Edit Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeEditOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeEditOutlineLogo = React.forwardRef<SVGSVGElement, HomeEditOutlineLogoProps>(
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
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.645 0 1.218 .305 1.584 .78" />
  <path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4" />
  <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39" />
    </svg>
  )
);

HomeEditOutlineLogo.displayName = "HomeEditOutlineLogo";

export const HomeEditOutlineLogoMetadata = {
  id: "home-edit-outline",
  baseId: "home-edit-outline",
  variant: "default",
  name: "Home Edit Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeEditOutlineLogo;
