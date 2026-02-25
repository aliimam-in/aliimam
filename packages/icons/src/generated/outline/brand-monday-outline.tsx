/**
 * Auto-generated logo component: Brand Monday Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandMondayOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandMondayOutlineLogo = React.forwardRef<SVGSVGElement, BrandMondayOutlineLogoProps>(
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
      <path d="M18 15.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
  <path d="M9.5 7a1.5 1.5 0 0 1 1.339 2.177l-4.034 7.074c-.264 .447 -.75 .749 -1.305 .749a1.5 1.5 0 0 1 -1.271 -2.297l3.906 -6.827a1.5 1.5 0 0 1 1.365 -.876" />
  <path d="M16.5 7a1.5 1.5 0 0 1 1.339 2.177l-4.034 7.074c-.264 .447 -.75 .749 -1.305 .749a1.5 1.5 0 0 1 -1.271 -2.297l3.906 -6.827a1.5 1.5 0 0 1 1.365 -.876" />
    </svg>
  )
);

BrandMondayOutlineLogo.displayName = "BrandMondayOutlineLogo";

export const BrandMondayOutlineLogoMetadata = {
  id: "brand-monday-outline",
  baseId: "brand-monday-outline",
  variant: "default",
  name: "Brand Monday Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandMondayOutlineLogo;
