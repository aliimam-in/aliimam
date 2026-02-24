/**
 * Auto-generated logo component: Cloud (default)
 * Category: feather
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
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  )
);

CloudLogo.displayName = "CloudLogo";

export const CloudLogoMetadata = {
  id: "cloud",
  baseId: "cloud",
  variant: "default",
  name: "Cloud",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudLogo;
