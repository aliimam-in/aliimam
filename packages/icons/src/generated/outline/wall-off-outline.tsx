/**
 * Auto-generated logo component: Wall Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WallOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WallOffOutlineLogo = React.forwardRef<SVGSVGElement, WallOffOutlineLogoProps>(
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
      <path d="M8 4h10a2 2 0 0 1 2 2v10m-.589 3.417c-.361 .36 -.86 .583 -1.411 .583h-12a2 2 0 0 1 -2 -2v-12c0 -.55 .222 -1.047 .58 -1.409" />
  <path d="M4 8h4m4 0h8" />
  <path d="M20 12h-4m-4 0h-8" />
  <path d="M4 16h12" />
  <path d="M9 4v1" />
  <path d="M14 8v2" />
  <path d="M8 12v4" />
  <path d="M11 16v4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

WallOffOutlineLogo.displayName = "WallOffOutlineLogo";

export const WallOffOutlineLogoMetadata = {
  id: "wall-off-outline",
  baseId: "wall-off-outline",
  variant: "default",
  name: "Wall Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WallOffOutlineLogo;
