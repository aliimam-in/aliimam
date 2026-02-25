/**
 * Auto-generated logo component: Stairs Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StairsDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StairsDownOutlineLogo = React.forwardRef<SVGSVGElement, StairsDownOutlineLogoProps>(
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
      <path d="M22 21h-5v-5h-5v-5h-5v-5h-5" />
  <path d="M18 3v7" />
  <path d="M15 7l3 3l3 -3" />
    </svg>
  )
);

StairsDownOutlineLogo.displayName = "StairsDownOutlineLogo";

export const StairsDownOutlineLogoMetadata = {
  id: "stairs-down-outline",
  baseId: "stairs-down-outline",
  variant: "default",
  name: "Stairs Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StairsDownOutlineLogo;
