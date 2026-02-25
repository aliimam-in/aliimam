/**
 * Auto-generated logo component: Brand Instagram Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandInstagramFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandInstagramFilledLogo = React.forwardRef<SVGSVGElement, BrandInstagramFilledLogoProps>(
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
      <path d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-4 5a4 4 0 0 0 -3.995 3.8l-.005 .2a4 4 0 1 0 4 -4m4.5 -1.5a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

BrandInstagramFilledLogo.displayName = "BrandInstagramFilledLogo";

export const BrandInstagramFilledLogoMetadata = {
  id: "brand-instagram-filled",
  baseId: "brand-instagram-filled",
  variant: "default",
  name: "Brand Instagram Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandInstagramFilledLogo;
