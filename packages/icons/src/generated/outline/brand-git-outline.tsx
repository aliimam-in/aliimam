/**
 * Auto-generated logo component: Brand Git Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGitOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGitOutlineLogo = React.forwardRef<SVGSVGElement, BrandGitOutlineLogoProps>(
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
      <path d="M15 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12 15v-6" />
  <path d="M15 11l-2 -2" />
  <path d="M11 7l-1.9 -1.9" />
  <path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0" />
    </svg>
  )
);

BrandGitOutlineLogo.displayName = "BrandGitOutlineLogo";

export const BrandGitOutlineLogoMetadata = {
  id: "brand-git-outline",
  baseId: "brand-git-outline",
  variant: "default",
  name: "Brand Git Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGitOutlineLogo;
