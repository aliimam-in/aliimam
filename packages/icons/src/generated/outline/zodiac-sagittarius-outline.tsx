/**
 * Auto-generated logo component: Zodiac Sagittarius Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacSagittariusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacSagittariusOutlineLogo = React.forwardRef<SVGSVGElement, ZodiacSagittariusOutlineLogoProps>(
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
      <path d="M4 20l16 -16" />
  <path d="M13 4h7v7" />
  <path d="M6.5 12.5l5 5" />
    </svg>
  )
);

ZodiacSagittariusOutlineLogo.displayName = "ZodiacSagittariusOutlineLogo";

export const ZodiacSagittariusOutlineLogoMetadata = {
  id: "zodiac-sagittarius-outline",
  baseId: "zodiac-sagittarius-outline",
  variant: "default",
  name: "Zodiac Sagittarius Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacSagittariusOutlineLogo;
