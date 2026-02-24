/**
 * Auto-generated logo component: Ban (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BanLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BanLogo = React.forwardRef<SVGSVGElement, BanLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="M4.929 4.929 19.07 19.071" />
    </svg>
  )
);

BanLogo.displayName = "BanLogo";

export const BanLogoMetadata = {
  id: "ban",
  baseId: "ban",
  variant: "default",
  name: "Ban",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BanLogo;
