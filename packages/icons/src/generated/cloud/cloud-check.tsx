/**
 * Auto-generated logo component: Cloud Check (default)
 * Category: cloud
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudCheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudCheckLogo = React.forwardRef<SVGSVGElement, CloudCheckLogoProps>(
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
      <path d="m17 15-5.5 5.5L9 18" />
  <path d="M5.516 16.07A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 3.501 7.327" />
    </svg>
  )
);

CloudCheckLogo.displayName = "CloudCheckLogo";

export const CloudCheckLogoMetadata = {
  id: "cloud-check",
  baseId: "cloud-check",
  variant: "default",
  name: "Cloud Check",
  category: "cloud",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudCheckLogo;
