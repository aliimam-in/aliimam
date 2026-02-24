/**
 * Auto-generated logo component: Droplets (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DropletsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DropletsLogo = React.forwardRef<SVGSVGElement, DropletsLogoProps>(
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
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
  <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  )
);

DropletsLogo.displayName = "DropletsLogo";

export const DropletsLogoMetadata = {
  id: "droplets",
  baseId: "droplets",
  variant: "default",
  name: "Droplets",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DropletsLogo;
