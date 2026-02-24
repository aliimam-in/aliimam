/**
 * Auto-generated logo component: Russian Ruble (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RussianRubleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RussianRubleLogo = React.forwardRef<SVGSVGElement, RussianRubleLogoProps>(
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
      <path d="M6 11h8a4 4 0 0 0 0-8H9v18" />
  <path d="M6 15h8" />
    </svg>
  )
);

RussianRubleLogo.displayName = "RussianRubleLogo";

export const RussianRubleLogoMetadata = {
  id: "russian-ruble",
  baseId: "russian-ruble",
  variant: "default",
  name: "Russian Ruble",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RussianRubleLogo;
