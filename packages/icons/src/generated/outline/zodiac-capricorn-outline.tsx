/**
 * Auto-generated logo component: Zodiac Capricorn Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacCapricornOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacCapricornOutlineLogo = React.forwardRef<SVGSVGElement, ZodiacCapricornOutlineLogoProps>(
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
      <path d="M4 4a3 3 0 0 1 3 3v9" />
  <path d="M7 7a3 3 0 0 1 6 0v11a3 3 0 0 1 -3 3" />
  <path d="M13 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    </svg>
  )
);

ZodiacCapricornOutlineLogo.displayName = "ZodiacCapricornOutlineLogo";

export const ZodiacCapricornOutlineLogoMetadata = {
  id: "zodiac-capricorn-outline",
  baseId: "zodiac-capricorn-outline",
  variant: "default",
  name: "Zodiac Capricorn Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacCapricornOutlineLogo;
