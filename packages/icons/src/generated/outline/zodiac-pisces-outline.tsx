/**
 * Auto-generated logo component: Zodiac Pisces Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacPiscesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacPiscesOutlineLogo = React.forwardRef<SVGSVGElement, ZodiacPiscesOutlineLogoProps>(
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
      <path d="M5 3a21 21 0 0 1 0 18" />
  <path d="M19 3a21 21 0 0 0 0 18" />
  <path d="M5 12l14 0" />
    </svg>
  )
);

ZodiacPiscesOutlineLogo.displayName = "ZodiacPiscesOutlineLogo";

export const ZodiacPiscesOutlineLogoMetadata = {
  id: "zodiac-pisces-outline",
  baseId: "zodiac-pisces-outline",
  variant: "default",
  name: "Zodiac Pisces Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacPiscesOutlineLogo;
