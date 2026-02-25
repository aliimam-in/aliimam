/**
 * Auto-generated logo component: Zodiac Leo Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacLeoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacLeoOutlineLogo = React.forwardRef<SVGSVGElement, ZodiacLeoOutlineLogoProps>(
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
      <path d="M13 17a4 4 0 1 0 8 0" />
  <path d="M3 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M7 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M7 7c0 3 2 5 2 9" />
  <path d="M15 7c0 4 -2 6 -2 10" />
    </svg>
  )
);

ZodiacLeoOutlineLogo.displayName = "ZodiacLeoOutlineLogo";

export const ZodiacLeoOutlineLogoMetadata = {
  id: "zodiac-leo-outline",
  baseId: "zodiac-leo-outline",
  variant: "default",
  name: "Zodiac Leo Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacLeoOutlineLogo;
