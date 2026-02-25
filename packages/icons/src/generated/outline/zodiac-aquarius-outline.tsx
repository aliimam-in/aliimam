/**
 * Auto-generated logo component: Zodiac Aquarius Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacAquariusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacAquariusOutlineLogo = React.forwardRef<SVGSVGElement, ZodiacAquariusOutlineLogoProps>(
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
      <path d="M3 10l3 -3l3 3l3 -3l3 3l3 -3l3 3" />
  <path d="M3 17l3 -3l3 3l3 -3l3 3l3 -3l3 3" />
    </svg>
  )
);

ZodiacAquariusOutlineLogo.displayName = "ZodiacAquariusOutlineLogo";

export const ZodiacAquariusOutlineLogoMetadata = {
  id: "zodiac-aquarius-outline",
  baseId: "zodiac-aquarius-outline",
  variant: "default",
  name: "Zodiac Aquarius Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacAquariusOutlineLogo;
