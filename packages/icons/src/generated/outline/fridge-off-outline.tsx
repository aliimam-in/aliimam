/**
 * Auto-generated logo component: Fridge Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FridgeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FridgeOffOutlineLogo = React.forwardRef<SVGSVGElement, FridgeOffOutlineLogoProps>(
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
      <path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
  <path d="M5 10h5m4 0h5" />
  <path d="M9 13v3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

FridgeOffOutlineLogo.displayName = "FridgeOffOutlineLogo";

export const FridgeOffOutlineLogoMetadata = {
  id: "fridge-off-outline",
  baseId: "fridge-off-outline",
  variant: "default",
  name: "Fridge Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FridgeOffOutlineLogo;
