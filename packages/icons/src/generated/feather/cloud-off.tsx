/**
 * Auto-generated logo component: Cloud Off (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudOffLogo = React.forwardRef<SVGSVGElement, CloudOffLogoProps>(
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
      <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"/><line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  )
);

CloudOffLogo.displayName = "CloudOffLogo";

export const CloudOffLogoMetadata = {
  id: "cloud-off",
  baseId: "cloud-off",
  variant: "default",
  name: "Cloud Off",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudOffLogo;
