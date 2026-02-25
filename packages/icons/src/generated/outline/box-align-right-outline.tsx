/**
 * Auto-generated logo component: Box Align Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxAlignRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxAlignRightOutlineLogo = React.forwardRef<SVGSVGElement, BoxAlignRightOutlineLogoProps>(
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
      <path d="M13.998 20.003v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-5" />
  <path d="M8.998 20.003h.01" />
  <path d="M3.997 20.003h.011" />
  <path d="M3.997 15.002h.011" />
  <path d="M3.997 9.002h.011" />
  <path d="M3.997 4.002h.011" />
  <path d="M8.998 4.002h.01" />
    </svg>
  )
);

BoxAlignRightOutlineLogo.displayName = "BoxAlignRightOutlineLogo";

export const BoxAlignRightOutlineLogoMetadata = {
  id: "box-align-right-outline",
  baseId: "box-align-right-outline",
  variant: "default",
  name: "Box Align Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxAlignRightOutlineLogo;
