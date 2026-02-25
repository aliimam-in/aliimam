/**
 * Auto-generated logo component: Brand Campaignmonitor Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandCampaignmonitorOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandCampaignmonitorOutlineLogo = React.forwardRef<SVGSVGElement, BrandCampaignmonitorOutlineLogoProps>(
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
      <path d="M3 18l9 -6.462l-9 -5.538v12h18v-12l-9 5.538" />
    </svg>
  )
);

BrandCampaignmonitorOutlineLogo.displayName = "BrandCampaignmonitorOutlineLogo";

export const BrandCampaignmonitorOutlineLogoMetadata = {
  id: "brand-campaignmonitor-outline",
  baseId: "brand-campaignmonitor-outline",
  variant: "default",
  name: "Brand Campaignmonitor Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandCampaignmonitorOutlineLogo;
