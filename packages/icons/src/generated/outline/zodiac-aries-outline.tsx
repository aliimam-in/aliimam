/**
 * Auto-generated logo component: Zodiac Aries Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacAriesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacAriesOutlineLogo = React.forwardRef<SVGSVGElement, ZodiacAriesOutlineLogoProps>(
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
      <path d="M12 5a5 5 0 1 0 -4 8" />
  <path d="M16 13a5 5 0 1 0 -4 -8" />
  <path d="M12 21l0 -16" />
    </svg>
  )
);

ZodiacAriesOutlineLogo.displayName = "ZodiacAriesOutlineLogo";

export const ZodiacAriesOutlineLogoMetadata = {
  id: "zodiac-aries-outline",
  baseId: "zodiac-aries-outline",
  variant: "default",
  name: "Zodiac Aries Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacAriesOutlineLogo;
