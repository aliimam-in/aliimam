/**
 * Auto-generated logo component: Cloudy (default)
 * Category: cloud
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudyLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudyLogo = React.forwardRef<SVGSVGElement, CloudyLogoProps>(
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
      <path d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z" />
  <path d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" />
    </svg>
  )
);

CloudyLogo.displayName = "CloudyLogo";

export const CloudyLogoMetadata = {
  id: "cloudy",
  baseId: "cloudy",
  variant: "default",
  name: "Cloudy",
  category: "cloud",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudyLogo;
