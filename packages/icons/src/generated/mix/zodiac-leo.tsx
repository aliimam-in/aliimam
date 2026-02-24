/**
 * Auto-generated logo component: Zodiac Leo (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacLeoLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacLeoLogo = React.forwardRef<SVGSVGElement, ZodiacLeoLogoProps>(
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
      <path d="M10 16c0-4-3-4.5-3-8a5 5 0 0 1 10 0c0 3.466-3 6.196-3 10a3 3 0 0 0 6 0" />
  <circle cx="7" cy="16" r="3" />
    </svg>
  )
);

ZodiacLeoLogo.displayName = "ZodiacLeoLogo";

export const ZodiacLeoLogoMetadata = {
  id: "zodiac-leo",
  baseId: "zodiac-leo",
  variant: "default",
  name: "Zodiac Leo",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacLeoLogo;
