/**
 * Auto-generated logo component: Package Export Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PackageExportOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PackageExportOutlineLogo = React.forwardRef<SVGSVGElement, PackageExportOutlineLogoProps>(
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
      <path d="M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5" />
  <path d="M12 12l8 -4.5" />
  <path d="M12 12v9" />
  <path d="M12 12l-8 -4.5" />
  <path d="M15 18h7" />
  <path d="M19 15l3 3l-3 3" />
    </svg>
  )
);

PackageExportOutlineLogo.displayName = "PackageExportOutlineLogo";

export const PackageExportOutlineLogoMetadata = {
  id: "package-export-outline",
  baseId: "package-export-outline",
  variant: "default",
  name: "Package Export Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PackageExportOutlineLogo;
