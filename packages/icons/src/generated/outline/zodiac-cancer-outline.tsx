/**
 * Auto-generated logo component: Zodiac Cancer Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacCancerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacCancerOutlineLogo = React.forwardRef<SVGSVGElement, ZodiacCancerOutlineLogoProps>(
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
      <path d="M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M15 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M3 12a10 6.5 0 0 1 14 -6.5" />
  <path d="M21 12a10 6.5 0 0 1 -14 6.5" />
    </svg>
  )
);

ZodiacCancerOutlineLogo.displayName = "ZodiacCancerOutlineLogo";

export const ZodiacCancerOutlineLogoMetadata = {
  id: "zodiac-cancer-outline",
  baseId: "zodiac-cancer-outline",
  variant: "default",
  name: "Zodiac Cancer Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacCancerOutlineLogo;
