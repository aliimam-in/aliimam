/**
 * Auto-generated logo component: Brand Opera Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandOperaFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandOperaFilledLogo = React.forwardRef<SVGSVGElement, BrandOperaFilledLogoProps>(
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
      <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 2.66c-2.285 0 -3.915 2.619 -3.997 5.752l-.003 .248c0 3.242 1.655 6 4 6s4 -2.758 4 -6s-1.655 -6 -4 -6" />
    </svg>
  )
);

BrandOperaFilledLogo.displayName = "BrandOperaFilledLogo";

export const BrandOperaFilledLogoMetadata = {
  id: "brand-opera-filled",
  baseId: "brand-opera-filled",
  variant: "default",
  name: "Brand Opera Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandOperaFilledLogo;
