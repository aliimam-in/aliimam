/**
 * Auto-generated logo component: Home Link Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HomeLinkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HomeLinkOutlineLogo = React.forwardRef<SVGSVGElement, HomeLinkOutlineLogoProps>(
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
      <path d="M20.085 11.085l-8.085 -8.085l-9 9h2v7a2 2 0 0 0 2 2h4.5" />
  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.807 1.143" />
  <path d="M20 21a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M20 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M15 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M21 16l-5 3l5 2" />
    </svg>
  )
);

HomeLinkOutlineLogo.displayName = "HomeLinkOutlineLogo";

export const HomeLinkOutlineLogoMetadata = {
  id: "home-link-outline",
  baseId: "home-link-outline",
  variant: "default",
  name: "Home Link Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HomeLinkOutlineLogo;
