/**
 * Auto-generated logo component: Armchair Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArmchairOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArmchairOutlineLogo = React.forwardRef<SVGSVGElement, ArmchairOutlineLogoProps>(
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
      <path d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2" />
  <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
  <path d="M6 19v2" />
  <path d="M18 19v2" />
    </svg>
  )
);

ArmchairOutlineLogo.displayName = "ArmchairOutlineLogo";

export const ArmchairOutlineLogoMetadata = {
  id: "armchair-outline",
  baseId: "armchair-outline",
  variant: "default",
  name: "Armchair Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArmchairOutlineLogo;
