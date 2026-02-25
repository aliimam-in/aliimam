/**
 * Auto-generated logo component: Package Import Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PackageImportOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PackageImportOutlineLogo = React.forwardRef<SVGSVGElement, PackageImportOutlineLogoProps>(
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
  <path d="M22 18h-7" />
  <path d="M18 15l-3 3l3 3" />
    </svg>
  )
);

PackageImportOutlineLogo.displayName = "PackageImportOutlineLogo";

export const PackageImportOutlineLogoMetadata = {
  id: "package-import-outline",
  baseId: "package-import-outline",
  variant: "default",
  name: "Package Import Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PackageImportOutlineLogo;
