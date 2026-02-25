/**
 * Auto-generated logo component: Zodiac Gemini Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacGeminiOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacGeminiOutlineLogo = React.forwardRef<SVGSVGElement, ZodiacGeminiOutlineLogoProps>(
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
      <path d="M3 3a21 21 0 0 0 18 0" />
  <path d="M3 21a21 21 0 0 1 18 0" />
  <path d="M7 4.5l0 15" />
  <path d="M17 4.5l0 15" />
    </svg>
  )
);

ZodiacGeminiOutlineLogo.displayName = "ZodiacGeminiOutlineLogo";

export const ZodiacGeminiOutlineLogoMetadata = {
  id: "zodiac-gemini-outline",
  baseId: "zodiac-gemini-outline",
  variant: "default",
  name: "Zodiac Gemini Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacGeminiOutlineLogo;
