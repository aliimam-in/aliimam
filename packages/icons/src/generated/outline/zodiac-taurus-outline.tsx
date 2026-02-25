/**
 * Auto-generated logo component: Zodiac Taurus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacTaurusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacTaurusOutlineLogo = React.forwardRef<SVGSVGElement, ZodiacTaurusOutlineLogoProps>(
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
      <path d="M6 3a6 6 0 0 0 12 0" />
  <path d="M6 15a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
    </svg>
  )
);

ZodiacTaurusOutlineLogo.displayName = "ZodiacTaurusOutlineLogo";

export const ZodiacTaurusOutlineLogoMetadata = {
  id: "zodiac-taurus-outline",
  baseId: "zodiac-taurus-outline",
  variant: "default",
  name: "Zodiac Taurus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacTaurusOutlineLogo;
