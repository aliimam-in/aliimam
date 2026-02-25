/**
 * Auto-generated logo component: Fish Symbol (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FishSymbolLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FishSymbolLogo = React.forwardRef<SVGSVGElement, FishSymbolLogoProps>(
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
      <path d="M2 16s9-15 20-4C11 23 2 8 2 8" />
    </svg>
  )
);

FishSymbolLogo.displayName = "FishSymbolLogo";

export const FishSymbolLogoMetadata = {
  id: "fish-symbol",
  baseId: "fish-symbol",
  variant: "default",
  name: "Fish Symbol",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FishSymbolLogo;
