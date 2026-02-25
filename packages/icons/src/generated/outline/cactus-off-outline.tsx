/**
 * Auto-generated logo component: Cactus Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CactusOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CactusOffOutlineLogo = React.forwardRef<SVGSVGElement, CactusOffOutlineLogoProps>(
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
      <path d="M6 9v1a3 3 0 0 0 3 3h1" />
  <path d="M18 8v5a3 3 0 0 1 -.129 .872m-2.014 2a3 3 0 0 1 -.857 .124h-1" />
  <path d="M10 21v-11m0 -4v-1a2 2 0 1 1 4 0v5m0 4v7" />
  <path d="M7 21h10" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CactusOffOutlineLogo.displayName = "CactusOffOutlineLogo";

export const CactusOffOutlineLogoMetadata = {
  id: "cactus-off-outline",
  baseId: "cactus-off-outline",
  variant: "default",
  name: "Cactus Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CactusOffOutlineLogo;
