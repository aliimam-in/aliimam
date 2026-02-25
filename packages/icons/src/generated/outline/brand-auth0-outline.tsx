/**
 * Auto-generated logo component: Brand Auth0 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandAuth0OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandAuth0OutlineLogo = React.forwardRef<SVGSVGElement, BrandAuth0OutlineLogoProps>(
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
      <path d="M12 14.5l-5.5 3.5l2 -6l-4.5 -4h6l2 -5l2 5h6l-4.5 4l2 6l-5.5 -3.5" />
  <path d="M20.507 8.872l-2.01 -5.872h-12.994l-2.009 5.872c-1.242 3.593 -.135 7.094 3.249 9.407l5.257 3.721l5.257 -3.721c3.385 -2.313 4.49 -5.814 3.25 -9.407" />
    </svg>
  )
);

BrandAuth0OutlineLogo.displayName = "BrandAuth0OutlineLogo";

export const BrandAuth0OutlineLogoMetadata = {
  id: "brand-auth0-outline",
  baseId: "brand-auth0-outline",
  variant: "default",
  name: "Brand Auth0 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandAuth0OutlineLogo;
