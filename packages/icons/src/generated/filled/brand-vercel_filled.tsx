/**
 * Auto-generated logo component: Brand Vercel (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandVercelFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandVercelFilledLogo = React.forwardRef<SVGSVGElement, BrandVercelFilledLogoProps>(
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
      <path d="M11.143 3.486a1 1 0 0 1 1.714 0l9 15a1 1 0 0 1 -.857 1.514h-18a1 1 0 0 1 -.857 -1.514z" />
    </svg>
  )
);

BrandVercelFilledLogo.displayName = "BrandVercelFilledLogo";

export const BrandVercelFilledLogoMetadata = {
  id: "brand-vercel_filled",
  baseId: "brand-vercel",
  variant: "filled",
  name: "Brand Vercel",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandVercelFilledLogo;
