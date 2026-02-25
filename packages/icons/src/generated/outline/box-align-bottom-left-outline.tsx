/**
 * Auto-generated logo component: Box Align Bottom Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxAlignBottomLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxAlignBottomLeftOutlineLogo = React.forwardRef<SVGSVGElement, BoxAlignBottomLeftOutlineLogoProps>(
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
      <path d="M5 13h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1" />
  <path d="M4 9v.01" />
  <path d="M4 4v.01" />
  <path d="M9 4v.01" />
  <path d="M15 4v.01" />
  <path d="M15 20v.01" />
  <path d="M20 4v.01" />
  <path d="M20 9v.01" />
  <path d="M20 15v.01" />
  <path d="M20 20v.01" />
    </svg>
  )
);

BoxAlignBottomLeftOutlineLogo.displayName = "BoxAlignBottomLeftOutlineLogo";

export const BoxAlignBottomLeftOutlineLogoMetadata = {
  id: "box-align-bottom-left-outline",
  baseId: "box-align-bottom-left-outline",
  variant: "default",
  name: "Box Align Bottom Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxAlignBottomLeftOutlineLogo;
