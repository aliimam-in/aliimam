/**
 * Auto-generated logo component: Align Center Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlignCenterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlignCenterOutlineLogo = React.forwardRef<SVGSVGElement, AlignCenterOutlineLogoProps>(
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
      <path d="M4 6l16 0" />
  <path d="M8 12l8 0" />
  <path d="M6 18l12 0" />
    </svg>
  )
);

AlignCenterOutlineLogo.displayName = "AlignCenterOutlineLogo";

export const AlignCenterOutlineLogoMetadata = {
  id: "align-center-outline",
  baseId: "align-center-outline",
  variant: "default",
  name: "Align Center Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlignCenterOutlineLogo;
