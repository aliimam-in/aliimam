/**
 * Auto-generated logo component: Package (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixPackageLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixPackageLogo = React.forwardRef<SVGSVGElement, MixPackageLogoProps>(
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
      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
  <path d="M12 22V12" />
  <polyline points="3.29 7 12 12 20.71 7" />
  <path d="m7.5 4.27 9 5.15" />
    </svg>
  )
);

MixPackageLogo.displayName = "MixPackageLogo";

export const MixPackageLogoMetadata = {
  id: "package",
  baseId: "package",
  variant: "default",
  name: "Package",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixPackageLogo;
