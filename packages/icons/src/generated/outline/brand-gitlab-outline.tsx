/**
 * Auto-generated logo component: Brand Gitlab Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGitlabOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGitlabOutlineLogo = React.forwardRef<SVGSVGElement, BrandGitlabOutlineLogoProps>(
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
      <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7l3 11" />
    </svg>
  )
);

BrandGitlabOutlineLogo.displayName = "BrandGitlabOutlineLogo";

export const BrandGitlabOutlineLogoMetadata = {
  id: "brand-gitlab-outline",
  baseId: "brand-gitlab-outline",
  variant: "default",
  name: "Brand Gitlab Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGitlabOutlineLogo;
