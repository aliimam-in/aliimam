/**
 * Auto-generated logo component: Brand Google Fit Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGoogleFitOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGoogleFitOutlineLogo = React.forwardRef<SVGSVGElement, BrandGoogleFitOutlineLogoProps>(
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
      <path d="M12 8.866l-2.733 -2.734a3.866 3.866 0 0 0 -5.467 5.467l2.733 2.734l5.467 5.467l8.202 -8.201a3.866 3.866 0 0 0 -5.469 -5.466l-8.201 8.2" />
    </svg>
  )
);

BrandGoogleFitOutlineLogo.displayName = "BrandGoogleFitOutlineLogo";

export const BrandGoogleFitOutlineLogoMetadata = {
  id: "brand-google-fit-outline",
  baseId: "brand-google-fit-outline",
  variant: "default",
  name: "Brand Google Fit Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGoogleFitOutlineLogo;
