/**
 * Auto-generated logo component: Brand Twilio Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandTwilioOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandTwilioOutlineLogo = React.forwardRef<SVGSVGElement, BrandTwilioOutlineLogoProps>(
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
      <path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0" />
  <path d="M8 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M14 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M8 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

BrandTwilioOutlineLogo.displayName = "BrandTwilioOutlineLogo";

export const BrandTwilioOutlineLogoMetadata = {
  id: "brand-twilio-outline",
  baseId: "brand-twilio-outline",
  variant: "default",
  name: "Brand Twilio Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandTwilioOutlineLogo;
