/**
 * Auto-generated logo component: Chevrons Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronsLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronsLeftOutlineLogo = React.forwardRef<SVGSVGElement, ChevronsLeftOutlineLogoProps>(
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
      <path d="M11 7l-5 5l5 5" />
  <path d="M17 7l-5 5l5 5" />
    </svg>
  )
);

ChevronsLeftOutlineLogo.displayName = "ChevronsLeftOutlineLogo";

export const ChevronsLeftOutlineLogoMetadata = {
  id: "chevrons-left-outline",
  baseId: "chevrons-left-outline",
  variant: "default",
  name: "Chevrons Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronsLeftOutlineLogo;
