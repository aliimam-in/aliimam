/**
 * Auto-generated logo component: Chevrons Down Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronsDownLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronsDownLeftOutlineLogo = React.forwardRef<SVGSVGElement, ChevronsDownLeftOutlineLogoProps>(
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
      <path d="M11 5v8h8" />
  <path d="M7 9v8h8" />
    </svg>
  )
);

ChevronsDownLeftOutlineLogo.displayName = "ChevronsDownLeftOutlineLogo";

export const ChevronsDownLeftOutlineLogoMetadata = {
  id: "chevrons-down-left-outline",
  baseId: "chevrons-down-left-outline",
  variant: "default",
  name: "Chevrons Down Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsDownLeftOutlineLogo;
