/**
 * Auto-generated logo component: Brand Google Drive Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGoogleDriveOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGoogleDriveOutlineLogo = React.forwardRef<SVGSVGElement, BrandGoogleDriveOutlineLogoProps>(
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
      <path d="M12 10l-6 10l-3 -5l6 -10l3 5" />
  <path d="M9 15h12l-3 5h-12" />
  <path d="M15 15l-6 -10h6l6 10l-6 0" />
    </svg>
  )
);

BrandGoogleDriveOutlineLogo.displayName = "BrandGoogleDriveOutlineLogo";

export const BrandGoogleDriveOutlineLogoMetadata = {
  id: "brand-google-drive-outline",
  baseId: "brand-google-drive-outline",
  variant: "default",
  name: "Brand Google Drive Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGoogleDriveOutlineLogo;
