/**
 * Auto-generated logo component: Zodiac Virgo Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacVirgoOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacVirgoOutlineLogo = React.forwardRef<SVGSVGElement, ZodiacVirgoOutlineLogoProps>(
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
      <path d="M3 4a2 2 0 0 1 2 2v9" />
  <path d="M5 6a2 2 0 0 1 4 0v9" />
  <path d="M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5" />
  <path d="M12 21a7 5 0 0 0 7 -5v-2a3 3 0 0 0 -6 0" />
    </svg>
  )
);

ZodiacVirgoOutlineLogo.displayName = "ZodiacVirgoOutlineLogo";

export const ZodiacVirgoOutlineLogoMetadata = {
  id: "zodiac-virgo-outline",
  baseId: "zodiac-virgo-outline",
  variant: "default",
  name: "Zodiac Virgo Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacVirgoOutlineLogo;
