/**
 * Auto-generated logo component: Home Cog Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeCogOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeCogOutlineLogo = React.forwardRef<SVGSVGElement, HomeCogOutlineLogoProps>(
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
      <path d="M9 21v-6a2 2 0 0 1 2 -2h1.6" />
  <path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4.159" />
  <path d="M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M18 14.5v1.5" />
  <path d="M18 20v1.5" />
  <path d="M21.032 16.25l-1.299 .75" />
  <path d="M16.27 19l-1.3 .75" />
  <path d="M14.97 16.25l1.3 .75" />
  <path d="M19.733 19l1.3 .75" />
    </svg>
  )
);

HomeCogOutlineLogo.displayName = "HomeCogOutlineLogo";

export const HomeCogOutlineLogoMetadata = {
  id: "home-cog-outline",
  baseId: "home-cog-outline",
  variant: "default",
  name: "Home Cog Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeCogOutlineLogo;
