/**
 * Auto-generated logo component: Box Align Top Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoxAlignTopRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoxAlignTopRightOutlineLogo = React.forwardRef<SVGSVGElement, BoxAlignTopRightOutlineLogoProps>(
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
      <path d="M19 11.01h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1" />
  <path d="M20 15.01v-.01" />
  <path d="M20 20.01v-.01" />
  <path d="M15 20.01v-.01" />
  <path d="M9 20.01v-.01" />
  <path d="M9 4.01v-.01" />
  <path d="M4 20.01v-.01" />
  <path d="M4 15.01v-.01" />
  <path d="M4 9.01v-.01" />
  <path d="M4 4.01v-.01" />
    </svg>
  )
);

BoxAlignTopRightOutlineLogo.displayName = "BoxAlignTopRightOutlineLogo";

export const BoxAlignTopRightOutlineLogoMetadata = {
  id: "box-align-top-right-outline",
  baseId: "box-align-top-right-outline",
  variant: "default",
  name: "Box Align Top Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoxAlignTopRightOutlineLogo;
