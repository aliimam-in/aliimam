/**
 * Auto-generated logo component: Box Align Bottom Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxAlignBottomOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxAlignBottomOutlineLogo = React.forwardRef<SVGSVGElement, BoxAlignBottomOutlineLogoProps>(
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
      <path d="M4 14h16v5a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-5" />
  <path d="M4 9v.01" />
  <path d="M4 4v.01" />
  <path d="M9 4v.01" />
  <path d="M15 4v.01" />
  <path d="M20 4v.01" />
  <path d="M20 9v.01" />
    </svg>
  )
);

BoxAlignBottomOutlineLogo.displayName = "BoxAlignBottomOutlineLogo";

export const BoxAlignBottomOutlineLogoMetadata = {
  id: "box-align-bottom-outline",
  baseId: "box-align-bottom-outline",
  variant: "default",
  name: "Box Align Bottom Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxAlignBottomOutlineLogo;
