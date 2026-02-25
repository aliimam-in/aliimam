/**
 * Auto-generated logo component: Zodiac Scorpio Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacScorpioOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacScorpioOutlineLogo = React.forwardRef<SVGSVGElement, ZodiacScorpioOutlineLogoProps>(
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
  <path d="M9 6a2 2 0 0 1 4 0v10a3 3 0 0 0 3 3h5l-3 -3m0 6l3 -3" />
    </svg>
  )
);

ZodiacScorpioOutlineLogo.displayName = "ZodiacScorpioOutlineLogo";

export const ZodiacScorpioOutlineLogoMetadata = {
  id: "zodiac-scorpio-outline",
  baseId: "zodiac-scorpio-outline",
  variant: "default",
  name: "Zodiac Scorpio Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacScorpioOutlineLogo;
