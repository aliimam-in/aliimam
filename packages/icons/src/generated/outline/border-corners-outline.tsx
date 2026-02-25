/**
 * Auto-generated logo component: Border Corners Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BorderCornersOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BorderCornersOutlineLogo = React.forwardRef<SVGSVGElement, BorderCornersOutlineLogoProps>(
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
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M20 16v2a2 2 0 0 1 -2 2h-2" />
  <path d="M8 20h-2a2 2 0 0 1 -2 -2v-2" />
  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
    </svg>
  )
);

BorderCornersOutlineLogo.displayName = "BorderCornersOutlineLogo";

export const BorderCornersOutlineLogoMetadata = {
  id: "border-corners-outline",
  baseId: "border-corners-outline",
  variant: "default",
  name: "Border Corners Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BorderCornersOutlineLogo;
