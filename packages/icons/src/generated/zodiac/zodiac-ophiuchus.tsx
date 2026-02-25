/**
 * Auto-generated logo component: Zodiac Ophiuchus (default)
 * Category: zodiac
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacOphiuchusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacOphiuchusLogo = React.forwardRef<SVGSVGElement, ZodiacOphiuchusLogoProps>(
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
      <path d="M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10" />
  <path d="M6 3v12a6 6 0 0 0 12 0V3" />
    </svg>
  )
);

ZodiacOphiuchusLogo.displayName = "ZodiacOphiuchusLogo";

export const ZodiacOphiuchusLogoMetadata = {
  id: "zodiac-ophiuchus",
  baseId: "zodiac-ophiuchus",
  variant: "default",
  name: "Zodiac Ophiuchus",
  category: "zodiac",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacOphiuchusLogo;
