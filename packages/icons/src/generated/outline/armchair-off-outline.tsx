/**
 * Auto-generated logo component: Armchair Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArmchairOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArmchairOffOutlineLogo = React.forwardRef<SVGSVGElement, ArmchairOffOutlineLogoProps>(
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
      <path d="M17 13a2 2 0 1 1 4 0v4m-2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 1 1 4 0v2h8.036" />
  <path d="M5 11v-5a3 3 0 0 1 .134 -.89m1.987 -1.98a3 3 0 0 1 .879 -.13h8a3 3 0 0 1 3 3v5" />
  <path d="M6 19v2" />
  <path d="M18 19v2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

ArmchairOffOutlineLogo.displayName = "ArmchairOffOutlineLogo";

export const ArmchairOffOutlineLogoMetadata = {
  id: "armchair-off-outline",
  baseId: "armchair-off-outline",
  variant: "default",
  name: "Armchair Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArmchairOffOutlineLogo;
