/**
 * Auto-generated logo component: Cut Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CutOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CutOutlineLogo = React.forwardRef<SVGSVGElement, CutOutlineLogoProps>(
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
      <path d="M4 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M9.15 14.85l8.85 -10.85" />
  <path d="M6 4l8.85 10.85" />
    </svg>
  )
);

CutOutlineLogo.displayName = "CutOutlineLogo";

export const CutOutlineLogoMetadata = {
  id: "cut-outline",
  baseId: "cut-outline",
  variant: "default",
  name: "Cut Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CutOutlineLogo;
