/**
 * Auto-generated logo component: Cactus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CactusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CactusOutlineLogo = React.forwardRef<SVGSVGElement, CactusOutlineLogoProps>(
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
  <path d="M18 8v5a3 3 0 0 1 -3 3h-1" />
  <path d="M10 21v-16a2 2 0 1 1 4 0v16" />
  <path d="M7 21h10" />
    </svg>
  )
);

CactusOutlineLogo.displayName = "CactusOutlineLogo";

export const CactusOutlineLogoMetadata = {
  id: "cactus-outline",
  baseId: "cactus-outline",
  variant: "default",
  name: "Cactus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CactusOutlineLogo;
