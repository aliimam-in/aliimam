/**
 * Auto-generated logo component: Turkish Lira (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TurkishLiraLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TurkishLiraLogo = React.forwardRef<SVGSVGElement, TurkishLiraLogoProps>(
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
      <path d="M15 4 5 9" />
  <path d="m15 8.5-10 5" />
  <path d="M18 12a9 9 0 0 1-9 9V3" />
    </svg>
  )
);

TurkishLiraLogo.displayName = "TurkishLiraLogo";

export const TurkishLiraLogoMetadata = {
  id: "turkish-lira",
  baseId: "turkish-lira",
  variant: "default",
  name: "Turkish Lira",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TurkishLiraLogo;
