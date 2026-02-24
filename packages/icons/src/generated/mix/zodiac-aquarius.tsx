/**
 * Auto-generated logo component: Zodiac Aquarius (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacAquariusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacAquariusLogo = React.forwardRef<SVGSVGElement, ZodiacAquariusLogoProps>(
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
      <path d="m2 10 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.096-.001l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 10" />
  <path d="m2 18.002 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.097 0l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 18.002" />
    </svg>
  )
);

ZodiacAquariusLogo.displayName = "ZodiacAquariusLogo";

export const ZodiacAquariusLogoMetadata = {
  id: "zodiac-aquarius",
  baseId: "zodiac-aquarius",
  variant: "default",
  name: "Zodiac Aquarius",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacAquariusLogo;
