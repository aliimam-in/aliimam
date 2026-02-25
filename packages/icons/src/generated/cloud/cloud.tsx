/**
 * Auto-generated logo component: Cloud (default)
 * Category: cloud
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudLogo = React.forwardRef<SVGSVGElement, CloudLogoProps>(
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
);

CloudLogo.displayName = "CloudLogo";

export const CloudLogoMetadata = {
  id: "cloud",
  baseId: "cloud",
  variant: "default",
  name: "Cloud",
  category: "cloud",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudLogo;
