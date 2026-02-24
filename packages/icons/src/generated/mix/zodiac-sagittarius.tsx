/**
 * Auto-generated logo component: Zodiac Sagittarius (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ZodiacSagittariusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ZodiacSagittariusLogo = React.forwardRef<SVGSVGElement, ZodiacSagittariusLogoProps>(
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
      <path d="M15 3h6v6" />
  <path d="M21 3 3 21" />
  <path d="m9 9 6 6" />
    </svg>
  )
);

ZodiacSagittariusLogo.displayName = "ZodiacSagittariusLogo";

export const ZodiacSagittariusLogoMetadata = {
  id: "zodiac-sagittarius",
  baseId: "zodiac-sagittarius",
  variant: "default",
  name: "Zodiac Sagittarius",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ZodiacSagittariusLogo;
