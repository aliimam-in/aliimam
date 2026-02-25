/**
 * Auto-generated logo component: Zodiac Virgo (default)
 * Category: zodiac
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacVirgoLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacVirgoLogo = React.forwardRef<SVGSVGElement, ZodiacVirgoLogoProps>(
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
      <path d="M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5" />
  <path d="M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5" />
  <path d="M6 19V6a3 3 0 0 0-3-3h0" />
  <path d="M6 5.5a1 1 0 0 1 5 0V19" />
    </svg>
  )
);

ZodiacVirgoLogo.displayName = "ZodiacVirgoLogo";

export const ZodiacVirgoLogoMetadata = {
  id: "zodiac-virgo",
  baseId: "zodiac-virgo",
  variant: "default",
  name: "Zodiac Virgo",
  category: "zodiac",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacVirgoLogo;
