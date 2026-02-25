/**
 * Auto-generated logo component: Brand Open Source (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandOpenSourceFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandOpenSourceFilledLogo = React.forwardRef<SVGSVGElement, BrandOpenSourceFilledLogoProps>(
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
      <path d="M12.283 2.004a10 10 0 0 1 3.736 19.155a1 1 0 0 1 -1.332 -.551l-2.193 -5.602a1 1 0 0 1 .456 -1.245a2 2 0 1 0 -1.9 0a1 1 0 0 1 .457 1.244l-2.193 5.603a1 1 0 0 1 -1.332 .552a10 10 0 0 1 4.018 -19.16z" />
    </svg>
  )
);

BrandOpenSourceFilledLogo.displayName = "BrandOpenSourceFilledLogo";

export const BrandOpenSourceFilledLogoMetadata = {
  id: "brand-open-source_filled",
  baseId: "brand-open-source",
  variant: "filled",
  name: "Brand Open Source",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandOpenSourceFilledLogo;
