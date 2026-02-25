/**
 * Auto-generated logo component: Zodiac Cancer (default)
 * Category: zodiac
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacCancerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacCancerLogo = React.forwardRef<SVGSVGElement, ZodiacCancerLogoProps>(
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
      <path d="M21 14.5A9 6.5 0 0 1 5.5 19" />
  <path d="M3 9.5A9 6.5 0 0 1 18.5 5" />
  <circle cx="17.5" cy="14.5" r="3.5" />
  <circle cx="6.5" cy="9.5" r="3.5" />
    </svg>
  )
);

ZodiacCancerLogo.displayName = "ZodiacCancerLogo";

export const ZodiacCancerLogoMetadata = {
  id: "zodiac-cancer",
  baseId: "zodiac-cancer",
  variant: "default",
  name: "Zodiac Cancer",
  category: "zodiac",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacCancerLogo;
