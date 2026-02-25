/**
 * Auto-generated logo component: Home Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeOffOutlineLogo = React.forwardRef<SVGSVGElement, HomeOffOutlineLogoProps>(
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
      <path d="M5 12h-2l4.497 -4.497m2 -2l2.504 -2.504l9 9h-2" />
  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2m0 -4v-3" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2m2 2v6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HomeOffOutlineLogo.displayName = "HomeOffOutlineLogo";

export const HomeOffOutlineLogoMetadata = {
  id: "home-off-outline",
  baseId: "home-off-outline",
  variant: "default",
  name: "Home Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeOffOutlineLogo;
