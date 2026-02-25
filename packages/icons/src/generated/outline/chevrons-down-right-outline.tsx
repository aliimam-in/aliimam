/**
 * Auto-generated logo component: Chevrons Down Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronsDownRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronsDownRightOutlineLogo = React.forwardRef<SVGSVGElement, ChevronsDownRightOutlineLogoProps>(
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
      <path d="M13 5v8h-8" />
  <path d="M17 9v8h-8" />
    </svg>
  )
);

ChevronsDownRightOutlineLogo.displayName = "ChevronsDownRightOutlineLogo";

export const ChevronsDownRightOutlineLogoMetadata = {
  id: "chevrons-down-right-outline",
  baseId: "chevrons-down-right-outline",
  variant: "default",
  name: "Chevrons Down Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsDownRightOutlineLogo;
