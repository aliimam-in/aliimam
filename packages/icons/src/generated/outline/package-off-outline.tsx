/**
 * Auto-generated logo component: Package Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PackageOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PackageOffOutlineLogo = React.forwardRef<SVGSVGElement, PackageOffOutlineLogoProps>(
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
      <path d="M8.812 4.793l3.188 -1.793l8 4.5v8.5m-2.282 1.784l-5.718 3.216l-8 -4.5v-9l2.223 -1.25" />
  <path d="M14.543 10.57l5.457 -3.07" />
  <path d="M12 12v9" />
  <path d="M12 12l-8 -4.5" />
  <path d="M16 5.25l-4.35 2.447m-2.564 1.442l-1.086 .611" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PackageOffOutlineLogo.displayName = "PackageOffOutlineLogo";

export const PackageOffOutlineLogoMetadata = {
  id: "package-off-outline",
  baseId: "package-off-outline",
  variant: "default",
  name: "Package Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PackageOffOutlineLogo;
