/**
 * Auto-generated logo component: Brand Ansible Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAnsibleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAnsibleOutlineLogo = React.forwardRef<SVGSVGElement, BrandAnsibleOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M9.647 12.294l6.353 3.706l-4 -9l-4 9" />
    </svg>
  )
);

BrandAnsibleOutlineLogo.displayName = "BrandAnsibleOutlineLogo";

export const BrandAnsibleOutlineLogoMetadata = {
  id: "brand-ansible-outline",
  baseId: "brand-ansible-outline",
  variant: "default",
  name: "Brand Ansible Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAnsibleOutlineLogo;
