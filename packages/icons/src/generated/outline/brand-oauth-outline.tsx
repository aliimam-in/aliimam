/**
 * Auto-generated logo component: Brand Oauth Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandOauthOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandOauthOutlineLogo = React.forwardRef<SVGSVGElement, BrandOauthOutlineLogoProps>(
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
      <path d="M2 12a10 10 0 1 0 20 0a10 10 0 1 0 -20 0" />
  <path d="M12.556 6c.65 0 1.235 .373 1.508 .947l2.839 7.848a1.646 1.646 0 0 1 -1.01 2.108a1.673 1.673 0 0 1 -2.068 -.851l-.46 -1.052h-2.73l-.398 .905a1.67 1.67 0 0 1 -1.977 1.045l-.153 -.047a1.647 1.647 0 0 1 -1.056 -1.956l2.824 -7.852a1.664 1.664 0 0 1 1.409 -1.087l1.272 -.008" />
    </svg>
  )
);

BrandOauthOutlineLogo.displayName = "BrandOauthOutlineLogo";

export const BrandOauthOutlineLogoMetadata = {
  id: "brand-oauth-outline",
  baseId: "brand-oauth-outline",
  variant: "default",
  name: "Brand Oauth Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandOauthOutlineLogo;
