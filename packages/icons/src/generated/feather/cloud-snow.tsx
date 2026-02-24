/**
 * Auto-generated logo component: Cloud Snow (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudSnowLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudSnowLogo = React.forwardRef<SVGSVGElement, CloudSnowLogoProps>(
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
      <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="8" y1="20" x2="8.01" y2="20"/><line x1="12" y1="18" x2="12.01" y2="18"/><line x1="12" y1="22" x2="12.01" y2="22"/><line x1="16" y1="16" x2="16.01" y2="16"/><line x1="16" y1="20" x2="16.01" y2="20"/>
    </svg>
  )
);

CloudSnowLogo.displayName = "CloudSnowLogo";

export const CloudSnowLogoMetadata = {
  id: "cloud-snow",
  baseId: "cloud-snow",
  variant: "default",
  name: "Cloud Snow",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudSnowLogo;
