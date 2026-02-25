/**
 * Auto-generated logo component: Zodiac Libra Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacLibraOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacLibraOutlineLogo = React.forwardRef<SVGSVGElement, ZodiacLibraOutlineLogoProps>(
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
      <path d="M5 20l14 0" />
  <path d="M5 17h5v-.3a7 7 0 1 1 4 0v.3h5" />
    </svg>
  )
);

ZodiacLibraOutlineLogo.displayName = "ZodiacLibraOutlineLogo";

export const ZodiacLibraOutlineLogoMetadata = {
  id: "zodiac-libra-outline",
  baseId: "zodiac-libra-outline",
  variant: "default",
  name: "Zodiac Libra Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacLibraOutlineLogo;
