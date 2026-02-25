/**
 * Auto-generated logo component: Brand Bitbucket (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandBitbucketFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandBitbucketFilledLogo = React.forwardRef<SVGSVGElement, BrandBitbucketFilledLogoProps>(
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
      <path d="M3.661 3l16.68 .007c.484 -.005 .946 .203 1.262 .57c.316 .368 .454 .856 .364 1.396l-3.338 14.651a1.64 1.64 0 0 1 -1.629 1.376h-10.01c-.906 -.009 -1.678 -.668 -1.82 -1.517l-3.148 -14.576a1.64 1.64 0 0 1 1.639 -1.907m11.339 5h-6a1 1 0 0 0 -.986 1.164l1 6a1 1 0 0 0 .986 .836h4a1 1 0 0 0 .986 -.836l1 -6a1 1 0 0 0 -.986 -1.164" />
    </svg>
  )
);

BrandBitbucketFilledLogo.displayName = "BrandBitbucketFilledLogo";

export const BrandBitbucketFilledLogoMetadata = {
  id: "brand-bitbucket_filled",
  baseId: "brand-bitbucket",
  variant: "filled",
  name: "Brand Bitbucket",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandBitbucketFilledLogo;
