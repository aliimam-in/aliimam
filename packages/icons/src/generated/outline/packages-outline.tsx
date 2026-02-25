/**
 * Auto-generated logo component: Packages Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PackagesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PackagesOutlineLogo = React.forwardRef<SVGSVGElement, PackagesOutlineLogoProps>(
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
      <path d="M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5" />
  <path d="M2 13.5v5.5l5 3" />
  <path d="M7 16.545l5 -3.03" />
  <path d="M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5" />
  <path d="M12 19l5 3" />
  <path d="M17 16.5l5 -3" />
  <path d="M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5" />
  <path d="M7 5.03v5.455" />
  <path d="M12 8l5 -3" />
    </svg>
  )
);

PackagesOutlineLogo.displayName = "PackagesOutlineLogo";

export const PackagesOutlineLogoMetadata = {
  id: "packages-outline",
  baseId: "packages-outline",
  variant: "default",
  name: "Packages Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PackagesOutlineLogo;
