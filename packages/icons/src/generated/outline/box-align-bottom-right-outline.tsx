/**
 * Auto-generated logo component: Box Align Bottom Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxAlignBottomRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxAlignBottomRightOutlineLogo = React.forwardRef<SVGSVGElement, BoxAlignBottomRightOutlineLogoProps>(
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
      <path d="M19 13h-5a1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1 -1v-5a1 1 0 0 0 -1 -1" />
  <path d="M20 9v.01" />
  <path d="M20 4v.01" />
  <path d="M15 4v.01" />
  <path d="M9 4v.01" />
  <path d="M9 20v.01" />
  <path d="M4 4v.01" />
  <path d="M4 9v.01" />
  <path d="M4 15v.01" />
  <path d="M4 20v.01" />
    </svg>
  )
);

BoxAlignBottomRightOutlineLogo.displayName = "BoxAlignBottomRightOutlineLogo";

export const BoxAlignBottomRightOutlineLogoMetadata = {
  id: "box-align-bottom-right-outline",
  baseId: "box-align-bottom-right-outline",
  variant: "default",
  name: "Box Align Bottom Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxAlignBottomRightOutlineLogo;
