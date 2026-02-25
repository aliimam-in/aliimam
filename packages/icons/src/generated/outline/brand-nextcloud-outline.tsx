/**
 * Auto-generated logo component: Brand Nextcloud Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandNextcloudOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandNextcloudOutlineLogo = React.forwardRef<SVGSVGElement, BrandNextcloudOutlineLogoProps>(
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
      <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M2 12.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
  <path d="M17 12.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
    </svg>
  )
);

BrandNextcloudOutlineLogo.displayName = "BrandNextcloudOutlineLogo";

export const BrandNextcloudOutlineLogoMetadata = {
  id: "brand-nextcloud-outline",
  baseId: "brand-nextcloud-outline",
  variant: "default",
  name: "Brand Nextcloud Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandNextcloudOutlineLogo;
