/**
 * Auto-generated logo component: Package Minus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PackageMinusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PackageMinusLogo = React.forwardRef<SVGSVGElement, PackageMinusLogoProps>(
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
  <path d="M16 17h6" />
  <path d="M21 13V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955" />
  <path d="M3.29 7 12 12l8.71-5" />
  <path d="m7.5 4.27 8.997 5.148" />
    </svg>
  )
);

PackageMinusLogo.displayName = "PackageMinusLogo";

export const PackageMinusLogoMetadata = {
  id: "package-minus",
  baseId: "package-minus",
  variant: "default",
  name: "Package Minus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PackageMinusLogo;
