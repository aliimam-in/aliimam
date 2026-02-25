/**
 * Auto-generated logo component: Ce Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CeOutlineLogo = React.forwardRef<SVGSVGElement, CeOutlineLogoProps>(
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
      <path d="M9 6a6 6 0 1 0 0 12" />
  <path d="M21 6a6 6 0 1 0 0 12" />
  <path d="M15 12h6" />
    </svg>
  )
);

CeOutlineLogo.displayName = "CeOutlineLogo";

export const CeOutlineLogoMetadata = {
  id: "ce-outline",
  baseId: "ce-outline",
  variant: "default",
  name: "Ce Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CeOutlineLogo;
