/**
 * Auto-generated logo component: Box Align Top Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxAlignTopOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxAlignTopOutlineLogo = React.forwardRef<SVGSVGElement, BoxAlignTopOutlineLogoProps>(
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
      <path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5" />
  <path d="M4 15.005v-.01" />
  <path d="M4 20.005v-.01" />
  <path d="M9 20.005v-.01" />
  <path d="M15 20.005v-.01" />
  <path d="M20 20.005v-.01" />
  <path d="M20 15.005v-.01" />
    </svg>
  )
);

BoxAlignTopOutlineLogo.displayName = "BoxAlignTopOutlineLogo";

export const BoxAlignTopOutlineLogoMetadata = {
  id: "box-align-top-outline",
  baseId: "box-align-top-outline",
  variant: "default",
  name: "Box Align Top Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxAlignTopOutlineLogo;
