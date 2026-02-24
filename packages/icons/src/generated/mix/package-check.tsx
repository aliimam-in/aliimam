/**
 * Auto-generated logo component: Package Check (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PackageCheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PackageCheckLogo = React.forwardRef<SVGSVGElement, PackageCheckLogoProps>(
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
      <path d="M12 22V12" />
  <path d="m16 17 2 2 4-4" />
  <path d="M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753" />
  <path d="M3.29 7 12 12l8.71-5" />
  <path d="m7.5 4.27 8.997 5.148" />
    </svg>
  )
);

PackageCheckLogo.displayName = "PackageCheckLogo";

export const PackageCheckLogoMetadata = {
  id: "package-check",
  baseId: "package-check",
  variant: "default",
  name: "Package Check",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PackageCheckLogo;
