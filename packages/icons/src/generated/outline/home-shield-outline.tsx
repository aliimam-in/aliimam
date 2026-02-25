/**
 * Auto-generated logo component: Home Shield Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeShieldOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeShieldOutlineLogo = React.forwardRef<SVGSVGElement, HomeShieldOutlineLogoProps>(
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
      <path d="M9 21v-6a2 2 0 0 1 2 -2h1.341" />
  <path d="M19.682 10.682l-7.682 -7.682l-9 9h2v7a2 2 0 0 0 2 2h5" />
  <path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5" />
    </svg>
  )
);

HomeShieldOutlineLogo.displayName = "HomeShieldOutlineLogo";

export const HomeShieldOutlineLogoMetadata = {
  id: "home-shield-outline",
  baseId: "home-shield-outline",
  variant: "default",
  name: "Home Shield Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeShieldOutlineLogo;
